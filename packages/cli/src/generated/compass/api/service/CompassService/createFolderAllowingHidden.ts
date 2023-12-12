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
import type { CreateFolderRequest } from "../../request/CreateFolderRequest.js";
import type { Resource } from "../../Resource.js";

/**
 * Similar to createFolder, but allows the creation of hidden folders: if the specified parent is a hidden resource,
 * or is not a folder, then the new folder being created is created as a hidden resource.
 *
 * Throws the following errors:
 * NotFoundException
 * if the parent does not exist
 * InsufficientPermissions
 * if attempting to create folder in a service project without the `compass:write-service-project` permission
 * BadRequestException
 * if a resource with the given name already exists
 */
export async function createFolderAllowingHidden(
  ctx: ConjureContext,
  userBearerToken: string | undefined,
  request: CreateFolderRequest,
): Promise<Resource> {
  return conjureFetch(ctx, `/folders-allowing-hidden`, "POST", request);
}
