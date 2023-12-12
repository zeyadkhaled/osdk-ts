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

// eslint-disable-next-line import/no-named-as-default
import consola from "consola";
import * as enq from "enquirer";
import { exit } from "process";
import { getAllEnrollmentInfos } from "../../../generated/control-panel/api/EnrollmentManagementService.js";
import { createConjureContext } from "../../../net/createConjureContext.mjs";
import invokeLoginFlow from "../../auth/login/loginFlow.js";
import type { InitializeOntology } from "./LoginArgs.js";

export default async function initializeOntology(args: InitializeOntology) {
  await invokeLoginFlow({
    baseUrl: args.baseUrl,
    applicationId: args.applicationId,
    verbose: args.verbose,
  });

  const compassContext = createConjureContext(args.baseUrl, "/compass/api");
  const controlPanelContext = createConjureContext(
    args.baseUrl,
    "/control-panel/api",
  );

  const enquire = new enq.default();
  consola.start("Creating a Foundry Namespace");

  consola.info("Fetching valid enrollments");
  let selectedEnrollment;
  const { enrollments } = await getAllEnrollmentInfos(controlPanelContext);
  if (enrollments.length === 0) {
    consola.error("Unable to find any enrollments");
    exit(1);
  } else if (enrollments.length === 2) {
    consola.success("Defaulting to enrollment", enrollments[0].name);
    selectedEnrollment = enrollments[0];
  } else {
    enquire.prompt({
      type: "select",
      name: "Select",
      message: "Found multiple enrollments, please select one",
      choices: enrollments.map(e => {
        return {
          name: e.name,
          value: e,
        };
      }),
    });
  }

  // const namespace = await createNamespace(compassContext, {
  //   name: "Test",
  //   alias: undefined,
  //   description: "",
  //   roleGrants: {
  //     "compass:manage": [
  //       {
  //         "id": "6a324465-478f-43dd-93a0-861be31e4b20",
  //         "type": "USER",
  //       },
  //     ],
  //   },
  //   organizationMarkingIds: [],
  //   fileSystemId: "hdfs-encrypted",
  //   usageAccountRid:
  //     "ri.resource-policy-manager.global.usage-account.a9db00ff-9ae8-4de6-9f66-4bb78cdccd6c",
  //   resourceQueueRid: undefined,
  //   roleSets: [
  //     "compass",
  //   ],
  //   deletionPolicy: {
  //     "lastOut": {
  //       "organizationRids": [
  //         "ri.multipass..organization.803ff9f6-7fff-4ace-972a-da7866ecebae",
  //       ],
  //     },
  //     "type": "lastOut",
  //   },
  //   requireProjectAccessMarkings: undefined,
  // });

  consola.success("Created a namespace");
}
