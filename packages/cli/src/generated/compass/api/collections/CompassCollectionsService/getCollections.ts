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

/**
 * Get details for the specified collection rids.
 * Any collections which do not exist or the user does not have permission to view will be absent from the result.
 * Returns a map from collection rid to the collection.
 */
export async function getCollections(
  ctx: ConjureContext,
  requestedCollections: Array<CollectionRid>,
): Promise<Record<CollectionRid, CompassCollection>> {
  return conjureFetch(ctx, `/batch/collections`, "POST", requestedCollections);
}
