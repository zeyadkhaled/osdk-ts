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

import { createDataset, putSchema } from "@osdk/gateway/requests";
import type { ObjectTypeV2 } from "@osdk/gateway/types";
import type { ClientContext } from "@osdk/shared.net";
import { createOpenApiRequest } from "@osdk/shared.net";
// eslint-disable-next-line import/no-named-as-default
import consola from "consola";
import { randomUUID } from "crypto";

export async function createDatasetFlow(
  clientContext: ClientContext<any>,
  objectType: ObjectTypeV2,
) {
  // Create a folder
  const random = randomUUID();
  const folderName = objectType.apiName + random.toString();
  const folderRid =
    "ri.compass.main.folder.bfe9d84b-cbf1-47fa-b30f-192b241830cf";
  // Create a dataset
  consola.start("Creating dataset...");
  const dataset = await createDataset(
    createOpenApiRequest(clientContext.stack, clientContext.fetch),
    {
      name: folderName,
      parentFolderRid: folderRid,
    },
  );
  // Set description
  consola.success("Dataset created: ", dataset.rid);

  // Create a branch
  //   consola.verbose("Creating branch...");
  //   const branch = await createBranch(
  //     createOpenApiRequest(basePath, fetchFn),
  //     dataset.rid,
  //     {
  //       branchId: "master",
  //     },
  //   );

  //   // Start a transaction
  //   consola.verbose("Creating transaction...");
  //   const transaction = await createTransaction(
  //     createOpenApiRequest(basePath, fetchFn),
  //     dataset.rid,
  //     {
  //       transactionType: "SNAPSHOT",
  //     },
  //     {
  //       branchId: branch.branchId,
  //     },
  //   );

  //   // Upload parquet files
  //   // Commit transaction
  //   consola.verbose("Committing transaction...");
  //   await commitTransaction(
  //     createOpenApiRequest(basePath, fetchFn),
  //     dataset.rid,
  //     transaction.rid,
  //   );
  //   // Get Schema
  //   const schema = await getSchema(
  //     createOpenApiRequest(basePath, fetchFn),
  //     dataset.rid,
  //     {
  //       branchId: branch.branchId,
  //     },
  //   );
  // Apply schema

  const propertySchemas = Object.entries(objectType.properties).map(
    ([propertyApiName, property]) => {
      const idProperty: propertySchema = {
        type: property.dataType.type === "integer" ? "INTEGER" : "STRING",
        name: propertyApiName,
        nullable: null,
        userDefinedTypeClass: null,
        customMetadata: {},
        arraySubtype: null,
        precision: null,
        scale: null,
        mapKeyType: null,
        mapValueType: null,
        subSchemas: null,
      };
      return idProperty;
    },
  );

  const mySchema: schema = {
    fieldSchemaList: propertySchemas,
    primaryKey: null,
    dataFrameReaderClass:
      "com.palantir.foundry.spark.input.ParquetDataFrameReader",
    customMetadata: {
      format: "parquet",
    },
  };

  consola.start("Putting Schema");
  try {
    await putSchema(
      createOpenApiRequest(clientContext.stack, clientContext.fetch),
      dataset.rid,
      mySchema,
      { preview: true },
    );
  } catch (e) {
  }
  consola.success("Put Schema");

  return dataset.rid;
}

type propertySchema = {
  type: "INTEGER" | "STRING";
  name: string;
  nullable: null;
  userDefinedTypeClass: null;
  customMetadata: {};
  arraySubtype: null;
  precision: null;
  scale: null;
  mapKeyType: null;
  mapValueType: null;
  subSchemas: null;
};

type schema = {
  fieldSchemaList: propertySchema[];
  primaryKey: null;
  dataFrameReaderClass:
    "com.palantir.foundry.spark.input.ParquetDataFrameReader";
  customMetadata: { format: "parquet" };
};
