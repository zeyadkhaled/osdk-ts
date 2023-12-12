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
 * Trashes the specified resources idempotently. This will deny "compass:manage-without-view" to non-service users
 * and keep a record of the delete for later restoration. Cannot be used on autosave or hidden resources.
 *
 * Can operate on both service project resources and non service project resources resources.
 *
 * Requires "compass:delete" on the resources.
 *
 * Throws the following errors:
 *
 * CannotTrashNamespaces
 * if the resource is a non-service namespace
 * CannotTrashAutosaveResources
 * if the resource is an autosaved resource
 * CannotTrashHiddenResources
 * if the resource is a hidden resource
 * ForbiddenOperationOnServiceProjectResources
 * if the rid or resourceRequest's parentId are service project resources and the AuthHeader does not have compass:write-service-project.
 * BadRequestException
 * if any of the resources is a non-empty folder
 * ForbiddenException
 * if unauthorized to delete any of the resources
 */
export async function addToTrash(
  ctx: ConjureContext,
  userBearerToken: string | undefined,
  rids: Array<string>,
): Promise<void> {
  return conjureFetch(ctx, `/batch/trash/add`, "POST", rids);
}
