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
import type { CreateOrPatchBranchesRequest } from "../../request/CreateOrPatchBranchesRequest.js";

/**
 * Creates or patches branches for several resources at once. This endpoint will apply the patches for all resources as
 * described in the createOrPatchBranch endpoint.
 * To overwrite the entire set of branches for resources in batch, use the setBranches endpoint.
 *
 * Can operate on both service project resources and non service project resources resources.
 *
 * Throws:
 * InsufficientPermissions if the user does not have "compass:write-branch" on all of the branch rids
 * ForbiddenOperationOnServiceProjectResources if the resources passed in are service projects or service project resources and the AuthHeader does not have compass:write-service-project
 * BadRequestException if the branch does not exist and no name is specified
 */
export async function createOrPatchBranches(
  ctx: ConjureContext,
  createOrPatchBranchesRequest: CreateOrPatchBranchesRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/batch/branches/patch`,
    "POST",
    createOrPatchBranchesRequest,
  );
}
