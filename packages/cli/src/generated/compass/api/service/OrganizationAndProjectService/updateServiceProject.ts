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
import type { UpdateProjectRequest } from "../../request/UpdateProjectRequest.js";

/**
 * Similar to updateProject, but updates a service project. Clients must pass in a service user token
 * with service project write permissions in addition to the standard user token.
 *
 * Throws the following errors:
 *
 * NotProject if rid is not an project rid
 * UsersNamespaceOperationForbidden if trying to update a project within the Users namespace
 * InsufficientPermissions or GatekeeperInsufficientPermissions
 * if user doesn't have permission to update the project or if service user does not have permission to
 * update a service project
 * DuplicateName if there already exists a project with the same name
 * IllegalName if the project name is illegal (see docs for `name` field for more details)
 * UnrecognizedAccessLevel, UnrecognizedPatchOperation, or UnrecognizedPrincipal if the permissions on the project is invalid
 * OrganizationNotFound if the requested organization marking does not exist
 * InvalidOrganizationMarkingHierarchy, MissingOrganizationMarking if the requested organization marking(s)
 * does not exist on the parent or would result in an unmarked project under a marked Compass namespace
 */
export async function updateServiceProject(
  ctx: ConjureContext,
  rid: string,
  userBearerToken: string,
  request: UpdateProjectRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/hierarchy/service-projects/${rid}`,
    "POST",
    request,
  );
}
