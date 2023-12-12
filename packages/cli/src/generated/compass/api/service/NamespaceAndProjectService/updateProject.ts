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
import type { UpdateProjectRequestV2 } from "../../request/UpdateProjectRequestV2.js";

/**
 * Updates a project by rid and returns the updated project.
 *
 * Can operate on both service projects and non service projects.
 * Cannot be used to operate on user home projects (also known as "home folders").
 *
 * This may also be used to update markings on the project.
 * A project cannot be marked with any organization markings not also on its parent Compass namespace.
 * Organization markings may be removed completely from a project, but only if the parent Compass namespace is
 * similarly unmarked.
 *
 * Throws the following errors:
 *
 * NotProject if rid is not an project rid
 * ForbiddenOperationOnServiceProjectResources if the rid or resourceRequest's parentId are service project resources and the AuthHeader does not have compass:write-service-project.
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
  userBearerToken: string | undefined,
  rid: string,
  request: UpdateProjectRequestV2,
): Promise<ProjectFolderV2> {
  return conjureFetch(ctx, `/hierarchy/v2/projects/${rid}`, "PUT", request);
}
