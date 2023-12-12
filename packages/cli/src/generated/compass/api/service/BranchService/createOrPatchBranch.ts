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
import type { Branch } from "../../branches/Branch.js";
import type { CreateOrPatchBranchRequest } from "../../request/CreateOrPatchBranchRequest.js";

/**
 * Creates or patches a branch. If the branch does not exist, it will be created with initially empty urlVariables and the
 * specified name (as such, a name is required if the branch does not exist). The urlVariablesPatches will then be applied
 * sequentially. A urlVariablesPatch will merge with any existing urlVariables, preserving values with non-colliding keys.
 * Any key with a null value will be deleted.
 *
 * Taking the urlVariablesPatches as a list of patches allows for semantics like atomically switching from "source.contour"
 * to "source.stemma" by setting "source" to null before setting "source.stemma".
 *
 * Can operate on either service project resources or non service projects resources.
 *
 * Throws:
 * InsufficientPermissions if the user does not have "compass:write-branch" on branch rid
 * ForbiddenOperationOnServiceProjectResources if the rid passed in is a service project or a service project resource and the AuthHeader does not have compass:write-service-project
 * BadRequestException if the branch does not exist and no name is specified
 */
export async function createOrPatchBranch(
  ctx: ConjureContext,
  rid: string,
  branchRid: string,
  createOrPatchBranchRequest: CreateOrPatchBranchRequest,
): Promise<Branch> {
  return conjureFetch(
    ctx,
    `/resources/${rid}/branch/${branchRid}`,
    "POST",
    createOrPatchBranchRequest,
  );
}
