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
import type { CompassCollection } from "../CompassCollection.js";
import type { UpdateCollectionRequest } from "../UpdateCollectionRequest.js";

/**
 * Update an existing Collection.
 *
 * Throws:
 * NotFound if a collection with the specified rid does not exist
 * InsufficientPermissions, GatekeeperInsufficientPermissions if the user does not have permission to update the specified collection
 * OrganizationNotFound if the requested organization marking(s) does not exist
 *
 * Returns the collection with the updated fields.
 */
export async function updateCollection(
  ctx: ConjureContext,
  collectionRid: CollectionRid,
  updateCollectionRequest: UpdateCollectionRequest,
): Promise<CompassCollection> {
  return conjureFetch(
    ctx,
    `/collections/${collectionRid}`,
    "PUT",
    updateCollectionRequest,
  );
}
