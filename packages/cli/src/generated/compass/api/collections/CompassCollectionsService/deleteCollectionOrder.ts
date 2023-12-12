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

/**
 * Deletes the explicit ordering of a collection. The collection will revert to timestamp based ordering.
 *
 * Throws:
 * NotFound if the user references a collection which does not exist
 * InsufficientPermissions if the user does not have compass:collections:manage-collection on the collection.
 */
export async function deleteCollectionOrder(
  ctx: ConjureContext,
  collectionRid: CollectionRid,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/collections/${collectionRid}/resources/order`,
    "DELETE",
  );
}
