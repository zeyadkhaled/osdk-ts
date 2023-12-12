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
import type { NamespaceFolder } from "../../project/NamespaceFolder.js";
import type { CreateNamespaceRequest } from "../../request/CreateNamespaceRequest.js";

/**
 * Creates a namespace.
 *
 * Throws:
 * InsufficientPermissions or GatekeeperInsufficientPermissions if user doesn't have permission to create a Compass namespace.
 * UsersNamespaceOperationForbidden if trying to create a Compass namespace named Users
 * DuplicateName if there already exists a Compass namespace with the same name
 * IllegalName if the namespace name is illegal (see docs for `name` field for more details)
 * OrganizationNotFound if the requested organization marking does not exist
 * FileSystemInsufficientPermissions if the user doesn't have permission to use this filesystem
 * UsageAccountInsufficientPermissions if the user doesn't have permission to the usage account used in the namespace settings
 * NotAuthorizedToUse if the user doesn't have permission to use the organizations on the deletion policy
 * InvalidDeletionPolicy if the deletion policy doesn't respect the organization markings
 * InvalidRoleSets if the role sets are invalid
 */
export async function createNamespace(
  ctx: ConjureContext,
  request: CreateNamespaceRequest,
): Promise<NamespaceFolder> {
  return conjureFetch(ctx, `/hierarchy/v2/namespaces`, "POST", request);
}
