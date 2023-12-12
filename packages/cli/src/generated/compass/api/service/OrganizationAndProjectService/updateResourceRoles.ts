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
import type { UpdateResourceGrantsRequest } from "../../request/UpdateResourceGrantsRequest.js";

/**
 * Updates the role grants for a resource.
 *
 * The disable inherited permissions statements generated by OrganizationAndProjectService's updateResourceRolesV2 endpoint
 * on the resource (if any) will be removed if this endpoint is used.
 *
 * This endpoint cannot be used for projects or service project resources. To update roles on a project, use
 * updateProject.
 *
 * This endpoint cannot be used for hidden resources.
 *
 * Throws the following errors:
 * InsufficientPermissions if the user does not have "compass:change-resource-permission" on the resource
 * AutosaveResourceOperationForbidden if resource is an autosave resource
 * ForbiddenOperationOnHiddenResource if resource is a hidden resource
 * ForbiddenOperationOnServiceProjectResource if resource is a service project or a service project resource
 */
export async function updateResourceRoles(
  ctx: ConjureContext,
  rid: string,
  request: UpdateResourceGrantsRequest,
): Promise<void> {
  return conjureFetch(ctx, `/roles/${rid}`, "POST", request);
}
