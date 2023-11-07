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

import type {
  ObjectTypesFrom,
  OntologyDefinition,
  ThinClient,
} from "@osdk/api";
import { createOpenApiRequest } from "@osdk/api";
import { getObjectV2 } from "@osdk/gateway/requests";
import type { SelectableProperties } from "../../../client/interfaces/utils/OmitProperties";
import { convertWireToOsdkObject } from "../../../client/objects/convertWireToOsdkObject";
import type { OsdkLegacyObjectFrom } from "../../../client/OsdkObject";
import { GetObjectErrorHandler, handleGetObjectError } from "../ErrorHandlers";
import type { GetObjectError } from "../Errors";
import type { Result } from "../Result";
import { wrapResult } from "./util/wrapResult";

export async function getObject<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O> & string,
  T extends ReadonlyArray<
    keyof SelectableProperties<OsdkLegacyObjectFrom<O, K>>
  >,
>(
  client: ThinClient<OntologyDefinition<any>>,
  objectApiName: K,
  primaryKey: OsdkLegacyObjectFrom<O, K>["__primaryKey"],
  selectedProperties?: T,
): Promise<
  Result<
    T extends [] ? OsdkLegacyObjectFrom<O, K>
      : Pick<
        OsdkLegacyObjectFrom<O, K>,
        T[number] | "__apiName" | "__primaryKey"
      >,
    GetObjectError
  >
> {
  return wrapResult(async () => {
    const object = await getObjectV2(
      createOpenApiRequest(client.stack, client.fetch),
      client.ontology.metadata.ontologyApiName,
      objectApiName,
      primaryKey.toString(),
      {
        select: selectedProperties
          ? selectedProperties.map(x => x.toString())
          : [],
      },
    );

    // TODO: Fix me
    return convertWireToOsdkObject(
      client,
      objectApiName,
      object,
    ) as unknown as any;
  }, e => handleGetObjectError(new GetObjectErrorHandler(), e, e.parameters));
}
