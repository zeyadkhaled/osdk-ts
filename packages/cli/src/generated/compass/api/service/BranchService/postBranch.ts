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

/**
 * Create a branch if it does not already exist. The gatekeeper node for the branch must already exist.
 *
 * Can operate on either service project resources or non service projects resources.
 *
 * Throws:
 * InsufficientPermissions if the user does not have "compass:write-branch" on the branchRid
 * ForbiddenOperationOnServiceProjectResources if the rid is a service project resource and the AuthHeader does not have compass:write-service-project.
 * BadRequestException if the gatekeeper node for the branch does not exist
 */
export async function postBranch(
  ctx: ConjureContext,
  rid: string,
  branch: Branch,
): Promise<void> {
  return conjureFetch(ctx, `/resources/${rid}/branch`, "POST", branch);
}
