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

/**
 * This will restore the specified resources by setting directlyTrashed = false, removing the DENY manage-without-view,
 * and restoring any directly trashed ancestors.
 *
 * Can operate on both service project resources and non service project resources resources.
 *
 * Requires "compass:restore" on RIDs (which is automatically set by addToTrash(AuthHeader, Set)), and any
 * directly trashed ancestors. Cannot be used on service project resources.
 *
 * Throws the following errors:
 *
 * ForbiddenOperationOnServiceProjectResources
 * if the rid or resourceRequest's parentId are service project resources and the AuthHeader does not have compass:write-service-project.
 */
export async function restore(
  ctx: ConjureContext,
  rids: Array<string>,
  userBearerToken: string | undefined,
): Promise<void> {
  return conjureFetch(ctx, `/batch/trash/restore`, "POST", rids);
}
