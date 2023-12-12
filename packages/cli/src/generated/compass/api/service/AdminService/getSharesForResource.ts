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
import type { PrincipalId } from "../../PrincipalId.js";

/**
 * Get a list of principals with whom the given resource has been shared. Note that this is an admin
 * endpoint because it performs poorly (linear to the total number of shares).
 * Applications should avoid calling this frequently.
 *
 * Requires the compass:get-resource-shares permission.
 */
export async function getSharesForResource(
  ctx: ConjureContext,
  rid: string,
): Promise<Array<PrincipalId>> {
  return conjureFetch(ctx, `/admin/shares/${rid}`, "GET");
}
