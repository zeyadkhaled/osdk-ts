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

import {
  generateClientSdkVersionTwoPointZero,
  type WireOntologyDefinition,
} from "@osdk/generator";
// eslint-disable-next-line import/no-named-as-default
import consola from "consola";
import { mkdir, writeFile } from "fs/promises";
import { join } from "path";
import type { InitializeOntology } from "./LoginArgs.js";
export async function createOntologyFolder(
  ontologyRid: string,
  ontologyApiName: string,
  args: InitializeOntology,
) {
  try {
    await mkdir(args.outputDir, { recursive: true });
  } catch (e) {
    consola.error(e);
  }

  consola.start("Initializing Ontology Package with sample Ontology");
  await mkdir(`${args.outputDir}/src/ontology`, { recursive: true });
  await mkdir(`${args.outputDir}/stub-osdk/default`, { recursive: true });

  try {
    // TODO
    consola.success("Creating ./src/ontology/");
    consola.success("Creating ./src/ontology/Todo.ts");
    consola.success("Creating ./src/ontology/Ontology.ts");
    consola.success("Creating ./src/ontology/index.ts");
    const ontologyJson = getStartOntologyDefinition(
      ontologyRid,
      ontologyApiName,
    );

    await writeFile(
      join(args.outputDir, "ontology.json"),
      JSON.stringify(ontologyJson),
    );

    await generateClientSdkVersionTwoPointZero(
      ontologyJson,
      {
        writeFile: (path, contents) => {
          return writeFile(path, contents, "utf-8");
        },
        mkdir: async (path, options) => {
          await mkdir(path, options);
        },
      },
      join(args.outputDir, "src", "ontology"),
    );
  } catch (e) {
    consola.error(e);
  }

  consola.success("Created Ontology at " + args.outputDir);
  consola.success(
    "Modify the ontology to your needs and run `osdk ontology push` to push your changes to Foundry.",
  );
}

function getStartOntologyDefinition(
  ontologyRid: string,
  ontologyApiName: string,
): WireOntologyDefinition {
  return {
    ontology: {
      rid: ontologyRid,
      apiName: ontologyApiName,
      displayName: "",
      description: "",
    },
    objectTypes: {
      "Todo": {
        objectType: {
          apiName: "Todo",
          status: "ACTIVE",
          primaryKey: "id",
          properties: {
            "id": {
              dataType: {
                type: "string",
              },
            },
          },
          rid: "",
        },
        linkTypes: [],
      },
    },
    actionTypes: {},
    queryTypes: {},
  };
}

interface OntologyFile {
  ontologyRid: string;
  namespaceRid: string;
}
