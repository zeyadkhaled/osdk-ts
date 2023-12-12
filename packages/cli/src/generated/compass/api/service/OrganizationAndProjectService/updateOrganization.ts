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
import type { UpdateOrganizationRequest } from "../../request/UpdateOrganizationRequest.js";

/**
 * Updates a namespace by rid. If organization markings are configured in Multipass, then this may be used to update
 * the organization markings on the Compass namespace. The organization markings on a Compass namespace must
 * be a superset of the markings on its children projects. A Compass namespace cannot be marked unless all children
 * projects are marked.
 *
 * Throws:
 * NotNamespace if rid is not a Compass namespace rid
 * NotFound if resource doesn't exist or user doesn't have read access
 * InsufficientPermissions or GatekeeperInsufficientPermissions if user doesn't have permission to update the Compass namespace
 * UsersNamespaceOperationForbidden if trying to update the Users namespace
 * DuplicateName if there already exists a Compass namespace with the same name
 * OrganizationNotFound if the requested organization marking does not exist
 * InvalidOrganizationMarkingHierarchy, MissingOrganizationMarking if the Compass namespace is marked but not with a superset of the markings on its children
 * IllegalAccessLevel, UnrecognizedAccessLevel, UnrecognizedPatchOperation, or UnrecognizedPrincipal if the permissions on the Compass namespace are invalid
 */
export async function updateOrganization(
  ctx: ConjureContext,
  rid: string,
  request: UpdateOrganizationRequest,
): Promise<void> {
  return conjureFetch(ctx, `/hierarchy/organizations/${rid}`, "POST", request);
}
