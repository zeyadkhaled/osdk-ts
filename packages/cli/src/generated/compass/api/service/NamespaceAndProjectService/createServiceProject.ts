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
import type { ProjectFolderV2 } from "../../project/ProjectFolderV2.js";
import type { CreateProjectRequestV2 } from "../../request/CreateProjectRequestV2.js";

/**
 * Similar to createProject, but creates a service project. Service projects are hidden from many Compass
 * endpoints and they (and their contents) are not indexed for searching. Clients must pass in a service user
 * token with service project write permissions in addition to the standard user token.
 *
 * Services should perform a service-specific permission check on the user token prior to calling this API.
 * Compass will validate that the user token has `compass:read-resource` on the namespace, but does not check
 * `compass:create-project`.
 *
 * Throws the same errors as createProject, in addition to:
 * InsufficientPermissions if the service user token does not have service project write permissions
 *
 * However, InvalidRoleSetHierarchy is not thrown to allow services to apply role sets outside of namespace settings.
 */
export async function createServiceProject(
  ctx: ConjureContext,
  userBearerToken: string,
  request: CreateProjectRequestV2,
): Promise<ProjectFolderV2> {
  return conjureFetch(ctx, `/hierarchy/v2/service-projects`, "POST", request);
}
