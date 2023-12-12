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
import type { MoveResourcesRequest } from "../../request/MoveResourcesRequest.js";

/**
 * Moves a list of resources to a given folder. Destination and resources being moved cannot be hidden resources.
 *
 * Throws the following errors:
 * NotFoundException if the given folder does not exist or if folderRid does not refer to a folder
 * ForbiddenOperationOnHiddenResource if destination or any of the resources to move are hidden resources
 * ForbiddenOperationOnServiceProjectResources if destination or any of the resources to move are service projects or service project resources, and the AuthHeader does not have compass:write-service-project
 * DuplicateNameException if a resource with the given name already exists
 * CircularDependencyException if the destination is the resource itself or one of its children
 * UsersNamespaceOperationForbidden if trying to move projects in or out of the Users namespace
 * CannotMoveResourcesUnderHiddenResource if the destination is a hidden resource
 * UnexpectedParent if a parent is specified that does not match the resource's current parent.
 */
export async function moveResources(
  ctx: ConjureContext,
  folderRid: string,
  request: MoveResourcesRequest,
): Promise<void> {
  return conjureFetch(ctx, `/folders/${folderRid}/children`, "POST", request);
}
