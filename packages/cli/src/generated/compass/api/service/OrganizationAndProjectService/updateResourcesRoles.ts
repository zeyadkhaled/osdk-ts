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
import type { UpdateResourcesGrantsRequest } from "../../request/UpdateResourcesGrantsRequest.js";

/**
 * Similar to updateResourceRolesV2, but but allows updating roles on multiple resources.
 *
 * Throws the following errors:
 *
 * InsufficientPermissions
 * if the user does not have "compass:change-resource-permission" on the resources or if the service
 * user doesn't have write permissions on the service project
 * AutosaveResourceOperationForbidden
 * if any of the resources are autosave resources
 * ForbiddenOperationOnHiddenResource
 * if any of the resources are hidden resources
 */
export async function updateResourcesRoles(
  ctx: ConjureContext,
  userBearerToken: string | undefined,
  request: UpdateResourcesGrantsRequest,
): Promise<void> {
  return conjureFetch(ctx, `/roles/v2/bulk`, "POST", request);
}
