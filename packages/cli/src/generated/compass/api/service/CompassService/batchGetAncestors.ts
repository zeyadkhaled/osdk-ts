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
import type { BatchGetAncestorsRequest } from "../../BatchGetAncestorsRequest.js";
import type { BatchGetAncestorsResponse } from "../../BatchGetAncestorsResponse.js";

/**
 * Gets a map of rid to list of visible ancestors for each given rid. Provided the user can access the resource, this methods crawls up the
 * resources's ancestry until it encounters a resource that the user cannot access (or the root resource is encountered). Only
 * that visible contiguous list of ancestors will be returned. An empty list is a valid value for any given rid key.
 *
 * Returns a list of visible ancestors.
 */
export async function batchGetAncestors(
  ctx: ConjureContext,
  request: BatchGetAncestorsRequest,
): Promise<BatchGetAncestorsResponse> {
  return conjureFetch(ctx, `/batch/resources/ancestors`, "POST", request);
}
