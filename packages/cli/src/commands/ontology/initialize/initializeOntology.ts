/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createClientContext } from "@osdk/shared.net";
import type { ConjureContext } from "conjure-lite";
// eslint-disable-next-line import/no-named-as-default
import consola from "consola";
import enquirer from "enquirer";
import { exit } from "process";
import { createNamespace } from "../../../generated/compass/api/service/NamespaceAndProjectService.js";
import { getAllEnrollmentInfos } from "../../../generated/control-panel/api/EnrollmentManagementService.js";
import { getFileSystems } from "../../../generated/control-panel/api/FileSystemService.js";
import type { OrganizationInfo } from "../../../generated/control-panel/api/OrganizationInfo.js";
import { createOntology } from "../../../generated/ontology-metadata/api/v2/OntologyModificationService.js";
import { createConjureContext } from "../../../net/createConjureContext.mjs";
import { createOntologyFolder } from "./createOntologyFolder.js";
import type { MeResponse } from "./getMe.js";
import { getMe } from "./getMe.js";
import { getUsageAccounts } from "./getUsageAccounts.js";
import type { InitializeOntology } from "./LoginArgs.js";

const isIl = true;
let access_token: string = isIl
  ? process.env.FOUNDRY_SDK_AUTH_TOKEN as string
  : process.env.FOUNDRY_SDK_AUTH_TOKEN_1 as string;

export default async function initializeOntology(args: InitializeOntology) {
  // const token = await invokeLoginFlow({
  //   baseUrl: args.baseUrl,
  //   applicationId: args.applicationId,
  //   verbose: args.verbose,
  // });
  const token = {
    access_token,
  };

  const clientContext = createClientContext(
    {
      metadata: {
        userAgent: "@osdk/cli/0.0.0 ()",
      },
    },
    args.baseUrl!,
    () => token.access_token,
  );

  const me: MeResponse = await getMe({
    baseUrl: isIl
      ? "IL"
      : args.baseUrl,
    verbose: args.verbose,
    outputDir: args.outputDir,
    applicationId: args.applicationId,
  }, token);

  consola.log("Logged in as", me.username);

  const compassContext = createConjureContext(
    isIl
      ? "IL"
      : args.baseUrl,
    "/compass/api",
    () => token.access_token,
  );

  const omsContext = createConjureContext(
    isIl
      ? "IL"
      : args.baseUrl,
    "/ontology-metadata/api",
    () => token.access_token,
  );

  const controlPanelContext = createConjureContext(
    isIl
      ? "IL"
      : args.baseUrl,
    "/control-panel/api",
    () => token.access_token,
  );

  const enquire = new enquirer();
  const ontologyName = await enquire.prompt({
    type: "input",
    name: "ontologyName",
    message: "What would you like to name the Ontology?",
  }) as { ontologyName: string };

  consola.start("Creating a Foundry Namespace");

  const name: { name: string } = await enquire.prompt({
    type: "input",
    name: "name",
    message: "What would you like to name the namespace?",
  }) as { name: string };

  let selectedOrganization = await promptForOrganization(
    controlPanelContext,
  );

  let selectedFileSystem = await promptForFilesystem(
    controlPanelContext,
  );

  let selectedUsageAccount = await promptForUsageAccount(
    args.baseUrl,
    token.access_token,
  );

  consola.ready(`Ready to create namespace with the following parameters\n
  Name: ${name.name}\n
  File System: ${selectedFileSystem.name}\n
  Organization: ${selectedOrganization?.name}\n
  Usage Account: ${selectedUsageAccount.displayName}\n`);

  const confirm = await enquire.prompt({
    type: "confirm",
    name: "confirm",
    message: "Would you like to create the namespace?",
  }) as { confirm: boolean };

  if (confirm.confirm === false) {
    consola.success("Aborted creating a namespace");
    exit(0);
  }

  const namespace = await createNamespace(compassContext, {
    name: name.name,
    alias: undefined,
    description: "",
    roleGrants: {
      "compass:manage": [
        {
          "id": me.id,
          "type": "USER",
        },
      ],
    },
    organizationMarkingIds: [],
    fileSystemId: selectedFileSystem.fileSystemId,
    usageAccountRid: selectedUsageAccount.rid,
    resourceQueueRid: undefined,
    roleSets: [
      "compass",
    ],
    deletionPolicy: {
      "lastOut": {
        "organizationRids": [
          selectedOrganization?.orgRid,
        ],
      },
      "type": "lastOut",
    },
    requireProjectAccessMarkings: undefined,
  });

  consola.success("Created a namespace");

  consola.log("Creating Ontology");

  const ontology = await createOntology(omsContext, {
    apiName: ontologyName.ontologyName,
    displayName: ontologyName.ontologyName,
    description: "",
    ontologyOwnersGroupId: me.id,
    organizationMarkingIds: [],
    compassNamespaceRid: namespace.resource.rid,
  });

  consola.success("Created Ontology with rid", ontology.ontologyRid);
  await createOntologyFolder(
    ontology.ontologyRid,
    ontologyName.ontologyName,
    args,
  );
}
async function promptForOrganization(
  controlPanelContext: ConjureContext,
) {
  const enquire = new enquirer();

  consola.info("Fetching valid enrollments");
  let selectedEnrollment;
  const { enrollments } = await getAllEnrollmentInfos(controlPanelContext);

  if (enrollments.length === 0) {
    consola.error("Unable to find any enrollments");
    exit(1);
  } else if (enrollments.length === 1) {
    consola.success("Defaulting to enrollment", enrollments[0].name);
    selectedEnrollment = enrollments[0];
  } else {
    const enrollment = await enquire.prompt({
      type: "select",
      name: "enrollmentName",
      message: "Found multiple enrollments, please select one",
      choices: enrollments.map(e => {
        return {
          name: e.name,
          value: e,
        };
      }),
    }) as { enrollmentName: string };

    selectedEnrollment = enrollments.find(e =>
      e.name === enrollment.enrollmentName
    )!;
  }

  let organization: OrganizationInfo;
  if (selectedEnrollment.organizations.length === 0) {
    consola.error("Unable to find any organizations under the enrollment");
    exit(1);
  } else if (selectedEnrollment.organizations.length === 1) {
    consola.success(
      "Defaulting to organization",
      selectedEnrollment.organizations[0].name,
    );
    organization = selectedEnrollment.organizations[0];
  } else {
    const selectedOrganization = await enquire.prompt({
      type: "select",
      name: "organization",
      message:
        "Found multiple organizations under enrollment, please select one",
      choices: selectedEnrollment.organizations.map(e => {
        return {
          name: e.name,
          value: e,
        };
      }),
    }) as { organization: string };

    organization = selectedEnrollment.organizations.find(e =>
      e.name === selectedOrganization.organization
    )!;
  }

  return organization;
}

async function promptForFilesystem(controlPanelContext: ConjureContext) {
  const enquire = new enquirer();

  let selectedFileSystem;
  consola.info("Fetching available File Systems");
  const { catalogFileSystems } = await getFileSystems(controlPanelContext);

  if (catalogFileSystems.length === 0) {
    consola.error("Unable to find any File System");
    exit(1);
  } else if (catalogFileSystems.length === 1) {
    consola.success("Defaulting to File System", catalogFileSystems[0].name);
    selectedFileSystem = catalogFileSystems[0];
  } else {
    const fileSystem = await enquire.prompt({
      type: "select",
      name: "fileSystemName",
      message: "Found multiple File Systems, please select one",
      choices: catalogFileSystems.map(e => {
        return {
          name: e.name,
          value: e,
        };
      }),
    }) as { fileSystemName: string };
    selectedFileSystem = catalogFileSystems.find(e =>
      e.name === fileSystem.fileSystemName
    )!;
  }
  return selectedFileSystem;
}

async function promptForUsageAccount(baseUrl: string, token: string) {
  const enquire = new enquirer();

  consola.info("Fetching available usage accounts");
  const usageAccounts = await getUsageAccounts(baseUrl, token);

  if (usageAccounts.usageAccountsWithPermissions.length === 0) {
    consola.error("Unable to find any usage accounts");
    exit(1);
  } else if (usageAccounts.usageAccountsWithPermissions.length === 1) {
    consola.success(
      "Defaulting to usage account",
      usageAccounts.usageAccountsWithPermissions[0].usageAccount.displayName,
    );
    return usageAccounts.usageAccountsWithPermissions[0].usageAccount;
  } else {
    const usageAccount = await enquire.prompt({
      type: "select",
      name: "usageAccountName",
      message: "Found multiple usage accounts, please select one",
      choices: usageAccounts.usageAccountsWithPermissions.filter(acc =>
        acc.permission === "EDIT"
      ).map(e => {
        return {
          name: e.usageAccount.displayName,
          value: e.usageAccount,
        };
      }),
    }) as { usageAccountName: string };

    return usageAccounts.usageAccountsWithPermissions.find(e =>
      e.usageAccount.displayName === usageAccount.usageAccountName
    )!.usageAccount;
  }
}
