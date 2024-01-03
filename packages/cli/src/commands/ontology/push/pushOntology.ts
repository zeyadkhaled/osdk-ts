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

import type { PropertyV2 } from "@osdk/gateway/types";
import type { WireOntologyDefinition } from "@osdk/generator";
import { createClientContext } from "@osdk/shared.net";
import { readFile } from "fs/promises";
import { join } from "path";
import type { PropertyTypeModification } from "../../../generated/ontology-metadata/api/modification/PropertyTypeModification.js";
import { modifyOntology } from "../../../generated/ontology-metadata/api/v2/OntologyModificationService.js";
import { createConjureContext } from "../../../net/createConjureContext.mjs";
import { createDatasetFlow } from "./createDataset.js";
import type { PushOntology } from "./PushArgs.js";
// eslint-disable-next-line import/no-named-as-default
import consola from "consola";

const isIl = true;
let token: string = isIl
  ? process.env.FOUNDRY_SDK_AUTH_TOKEN as string
  : process.env.FOUNDRY_SDK_AUTH_TOKEN_1 as string;

export default async function pushOntologyChanges(
  args: PushOntology,
) {
  consola.start("Reading local Ontology Changes");

  const ontologyFile = await readFile(
    join(args.ontologyPath, "ontology.json"),
    "utf-8",
  );

  const ontology: WireOntologyDefinition = JSON.parse(
    ontologyFile,
  ) as WireOntologyDefinition;

  const omsContext = createConjureContext(
    "https://il-pg-alpha-5202725.use1.palantir.global:18443",
    "/ontology-metadata/api",
    () => token,
  );

  const clientContext = createClientContext(
    {
      metadata: {
        userAgent: "@osdk/cli/0.0.0 ()",
      },
    },
    omsContext.baseUrl!,
    () => token,
  );

  // TODO get ID
  const objectType = Object.values(ontology.objectTypes)[0].objectType;
  const id = "udxpxjle." + objectType.apiName.toLowerCase();

  const dataSetRid = await createDatasetFlow(
    clientContext,
    objectType,
  );

  consola.start("Pushing Ontology Changes");
  const modifyRequest = await modifyOntology(
    omsContext,
    undefined,
    ontology.ontology.rid,
    {
      objectTypes: {
        [id]: {
          type: "create",
          create: {
            objectType: {
              displayMetadata: {
                description: undefined,
                displayName: objectType.displayName ?? objectType.apiName,
                groupDisplayName: undefined,
                icon: {
                  type: "blueprint",
                  blueprint: {
                    color: "#4C90F0",
                    locator: "cube",
                  },
                },
                pluralDisplayName: `${
                  objectType.displayName ?? objectType.apiName
                }s`,
                visibility: "PROMINENT",
              },
              id: id,
              primaryKeys: [objectType.primaryKey],
              propertyTypes: Object.fromEntries(
                Object.entries(objectType.properties).map((
                  [name, property],
                ) => [name, propertyToPropertyApiMapping(name, property)]),
              ),
              sharedPropertyTypes: {},
              titlePropertyTypeId: objectType.primaryKey,
              traits: {
                workflowObjectTypeTraits: {},
                eventMetadata: undefined,
                actionLogMetadata: undefined,
                timeSeriesMetadata: undefined,
                sensorTrait: undefined,
              },
              apiName: objectType.apiName,
              status: {
                type: "experimental",
                experimental: {},
              },
              implementsInterfaces: [],
              typeGroups: [],
            },
            packageRid: undefined,
          },
        },
      },
      objectTypeDatasources: {
        [id]: [
          {
            "create": {
              "objectTypeDatasourceDefinition": {
                "dataset": {
                  "datasetRid": dataSetRid,
                  "propertyMapping": Object.fromEntries(
                    Object.keys(objectType.properties).map(
                      name => [name, name],
                    ),
                  ),
                  writebackDatasetRid: undefined,
                },
                "type": "dataset",
              },
              editsConfiguration: undefined,
              dataSecurity: undefined,
            },
            "type": "create",
          },
        ],
      },
      objectTypeEntityMetadata: {
        [id]: {
          "entityConfig": {
            "objectDbTypeConfigs": {
              "highbury": {
                "objectDbConfigs": {
                  "ri.highbury.main.cluster.1": {
                    "configValue": "{}",
                  },
                },
              },
            },
          },
          "arePatchesEnabled": false,
          "targetStorageBackend": {
            "objectStorageV2": {
              migrationConfiguration: undefined,
            },
            "type": "objectStorageV2",
          },
          "actionLogRequiredness": {
            "actionLogNotRequired": {},
            "type": "actionLogNotRequired",
          },
          diffEdits: undefined,
          gothamMapping: undefined,
          aliases: undefined,
          provenance: undefined,
          editsResolutionStrategies: undefined,
        },
      },
      objectTypeSchemaMigrationInitializations: {},
      objectTypeSchemaMigrations: {},
      linkTypes: {},
      manyToManyLinkTypeDatasources: {},
      linkTypeEntityMetadata: {},
      workflowsToCreate: {},
      workflowsToUpdate: {},
      workflowsToDelete: [],
      ruleSetsToCreate: {},
      ruleSetsToUpdate: {},
      ruleSetsToDelete: [],
      actionTypesToCreate: {},
      actionTypesToUpdate: {},
      actionTypesToDelete: [],
      sharedPropertyTypesToCreate: {},
      sharedPropertyTypesToUpdate: {},
      sharedPropertyTypesToDelete: [],
      interfaceTypesToCreate: {},
      interfaceTypesToUpdate: {},
      interfaceTypesToDelete: [],
      typeGroupsToCreate: {},
      typeGroupsToUpdate: {},
      typeGroupsToDelete: [],
      ontologyBranchRid: undefined,
      expectedOntologyVersion: undefined,
      expectedLastRebasedOntologyVersion: undefined,
      rebasedOntologyVersion: undefined,
      validateActiveEntityDeletions: undefined,
      useRoles: undefined,
    },
  );

  consola.success("Uploaded OntologyChanges");
}

function propertyToPropertyApiMapping(
  propertyName: string,
  propertyV2: PropertyV2,
): PropertyTypeModification {
  const propertyTypeModification: PropertyTypeModification = {
    displayMetadata: {
      description: propertyV2.description,
      displayName: propertyV2.displayName ?? propertyName,
      visibility: "PROMINENT",
    },
    id: propertyName,
    ruleSetBinding: undefined,
    baseFormatter: undefined,
    type: propertyV2.dataType.type === "integer"
      ? {
        type: "integer",
        integer: {},
      }
      : {
        type: "string",
        string: {
          analyzerOverride: undefined,
          isLongText: false,
          supportsExactMatching: false,
        },
      },
    typeClasses: [],
    indexedForSearch: false,
    apiName: propertyName,
    status: {
      type: "experimental",
      experimental: {},
    },
    inlineAction: undefined,
    dataConstraints: undefined,
    valueType: undefined,
  };
  return propertyTypeModification;
}
