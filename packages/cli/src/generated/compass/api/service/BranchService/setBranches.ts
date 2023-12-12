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
import type { SetBranchesRequest } from "../../branches/SetBranchesRequest.js";

/**
 * Set the branches for several resources at once. This endpoint will wipe away any non-referenced branches for
 * the resources that were passed in. To update branches instead of overwriting them, use createOrPatchBranches.
 *
 * Can operate on both service project resources and non service project resources resources.
 *
 * Throws:
 * InsufficientPermissions if the user does not have "compass:write-branch" on all branch rids
 * ForbiddenOperationOnServiceProjectResources if any of the resources passed in are service projects or service project resources, and the AuthHeader does not have compass:write-service-project
 */
export async function setBranches(
  ctx: ConjureContext,
  branches: SetBranchesRequest,
): Promise<void> {
  return conjureFetch(ctx, `/batch/branches`, "POST", branches);
}
