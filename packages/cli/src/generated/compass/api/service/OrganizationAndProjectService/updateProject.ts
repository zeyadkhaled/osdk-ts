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
 * Updates a non-service project by rid. If organization markings are enabled in Multipass, then this may also be
 * used to update the organization markings on the project. A project cannot be marked with any markings not also
 * on its parent Compass namespace. Organization markings may be removed completely from a project, but only if
 * the parent Compass namespace is similarly unmarked. This endpoint cannot be used with user folders.
 *
 * Throws the following errors:
 *
 * NotProject if rid is not an project rid
 * ForbiddenOperationOnServiceProjectResources if rid is a service project and the AuthHeader does not have compass:write-service-project.
 * UsersNamespaceOperationForbidden if trying to update a project within the Users namespace
 * InsufficientPermissions or GatekeeperInsufficientPermissions if user doesn't have permission to create the project.
 * DuplicateName if there already exists a project with the same name
 * IllegalName if the project name is illegal (see docs for `name` field for more details)
 * UnrecognizedAccessLevel, UnrecognizedPatchOperation, or UnrecognizedPrincipal if the permissions on the project is invalid
 * OrganizationNotFound if the requested organization marking does not exist
 * InvalidOrganizationMarkingHierarchy, MissingOrganizationMarking if the requested organization marking(s)
 * does not exist on the parent or would result in an unmarked project under a marked Compass namespace
 */
export async function updateProject(
  ctx: ConjureContext,
  rid: string,
  request: UpdateProjectRequest,
): Promise<void> {
  return conjureFetch(ctx, `/hierarchy/projects/${rid}`, "POST", request);
}
