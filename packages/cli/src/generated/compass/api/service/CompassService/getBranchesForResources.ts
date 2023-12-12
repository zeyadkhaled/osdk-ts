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
import type { GetBranchesForResourcesRequest } from "../../GetBranchesForResourcesRequest.js";
import type { GetBranchesForResourcesResponse } from "../../GetBranchesForResourcesResponse.js";

/**
 * Loads a collection of pages containing lists of branches that belong to the given resources.
 * Non-readable resources and branches will be filtered.
 */
export async function getBranchesForResources(
  ctx: ConjureContext,
  request: GetBranchesForResourcesRequest,
): Promise<GetBranchesForResourcesResponse> {
  return conjureFetch(ctx, `/branches-for-resources`, "PUT", request);
}
