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
 * Creates a non-service project. If organization markings are enabled in Multipass, then new projects must be
 * marked by at least one Multipass organization. If no marking is requested, the user's Multipass organization will be applied by
 * default. A project cannot be marked with any markings not also on its parent namespace.
 *
 * Throws:
 * NotNamespace if the resource identifier does not belong to a Compass namespace
 * UsersNamespaceOperationForbidden if trying to create a project within the Users namespace
 * InsufficientPermissions or GatekeeperInsufficientPermissions if the user doesn't have permission to create the project
 * DuplicateName if there already exists a project with the same name
 * IllegalName if the project name is illegal (see docs for `name` field for more details)
 * OrganizationNotFound if the requested organization marking does not exist
 * InvalidOrganizationMarkingHierarchy if the requested organization marking(s) does not exist on the parent
 * MissingNamespaceSettings if the settings on the namespace are not filled out
 * InvalidRoleSetHierarchy if the requested role sets are not allowed in the namespace
 * EmptyRoleSets if no role sets are requested
 */
export async function createProject(
  ctx: ConjureContext,
  onBehalfOf: string | undefined,
  request: CreateProjectRequestV2,
): Promise<ProjectFolderV2> {
  return conjureFetch(ctx, `/hierarchy/v2/projects`, "POST", request);
}
