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
import type { CollectionChildren } from "../CollectionChildren.js";
import type { CollectionRid } from "../CollectionRid.js";

/**
 * Returns the entire collection, ordered. If the order has not been set manually the results will be ordered
 * from earliest to most recently created.
 */
export async function getCollectionChildren(
  ctx: ConjureContext,
  collectionRid: CollectionRid,
): Promise<CollectionChildren> {
  return conjureFetch(ctx, `/collections/${collectionRid}/children`, "GET");
}
