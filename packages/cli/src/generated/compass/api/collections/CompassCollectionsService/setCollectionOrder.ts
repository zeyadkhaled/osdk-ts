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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type { CollectionRid } from "../CollectionRid.js";
import type { SetCollectionOrderRequest } from "../SetCollectionOrderRequest.js";

/**
 * Sets the order of a collection. All members of the collection must be present in the arguments - resources cannot be added or
 * deleted via this method.
 *
 * Throws:
 * NotFound if the user references a collection which does not exist
 * InsufficientPermissions if the user does not have compass:collections:manage-collection on the collection.
 */
export async function setCollectionOrder(
  ctx: ConjureContext,
  collectionRid: CollectionRid,
  setCollectionOrderRequest: SetCollectionOrderRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/collections/${collectionRid}/resources/order`,
    "PUT",
    setCollectionOrderRequest,
  );
}
