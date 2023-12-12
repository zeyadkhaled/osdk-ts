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
import type { UpdateNamespaceRequest } from "../../request/UpdateNamespaceRequest.js";

/**
 * Updates a namespace by rid.
 *
 * Throws:
 * NotNamespace if rid is not a Compass namespace rid
 * NotFound if resource doesn't exist or user doesn't have read access
 * InsufficientPermissions or GatekeeperInsufficientPermissions if user doesn't have permission to update the Compass namespace
 * UsersNamespaceOperationForbidden if trying to update the Users namespace
 * DuplicateName if there already exists a Compass namespace with the same name
 * OrganizationNotFound if the requested organization marking does not exist
 * IllegalAccessLevel, UnrecognizedAccessLevel, UnrecognizedPatchOperation, or UnrecognizedPrincipal if the permissions on the Compass namespace are invalid
 * InvalidOrganizationMarkingHierarchy, MissingOrganizationMarking if the Compass namespace is marked but not with a superset of the markings on its children
 * UsageAccountInsufficientPermissions if the user doesn't have permission to the usage account used in the namespace settings
 * NotAuthorizedToUse if the user doesn't have permission to use the organizations on the deletion policy
 * InvalidDeletionPolicyUpdate if the deletion policy patch is invalid
 * InvalidDeletionPolicy if the (potentially updated) deletion policy doesn't respect the (potentially updated) organization markings
 * InvalidRoleSets if the role sets are invalid
 * CannotRemoveRoleSets if removed role sets are used in projects in the namespace
 * ProjectDefaultRolesNotInNamespaceRoleSets if the project default role is not in the namespace role sets
 * Default:InvalidArgument if both roleSetPatches and roleSetUpdate is provided
 */
export async function updateNamespace(
  ctx: ConjureContext,
  rid: string,
  request: UpdateNamespaceRequest,
): Promise<void> {
  return conjureFetch(ctx, `/hierarchy/v2/namespaces/${rid}`, "PUT", request);
}
