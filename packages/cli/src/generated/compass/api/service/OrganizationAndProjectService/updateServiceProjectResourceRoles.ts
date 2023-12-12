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
 * Similar to updateResourceRolesV2, but updates the role grants for a service project resource. Clients must
 * pass in a service user token with service projcet write permissions in addition to the standard user token.
 *
 * Throws the following errors:
 *
 * InsufficientPermissions
 * if the user does not have "compass:change-resource-permission" on the resource or if the service
 * user doesn't have write permissions on the service project
 * AutosaveResourceOperationForbidden
 * if resource is an autosave resource
 * ForbiddenOperationOnHiddenResource
 * if resource is a hidden resource
 */
export async function updateServiceProjectResourceRoles(
  ctx: ConjureContext,
  userBearerToken: string,
  rid: string,
  request: UpdateResourceGrantsRequest,
): Promise<void> {
  return conjureFetch(ctx, `/roles/service-projects/${rid}`, "POST", request);
}
