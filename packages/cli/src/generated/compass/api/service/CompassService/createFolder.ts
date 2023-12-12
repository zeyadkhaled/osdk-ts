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
 * Creates a folder given a name and parent. Parent resource can be a project or folder.
 * Does not allow the creation of hidden folders.
 *
 * Returns:
 * the new folder resource
 *
 * Throws the following errors:
 * NotFoundException
 * if the parent does not exist
 * InsufficientPermissions
 * if attempting to create folder in a service project without the `compass:write-service-project` permission
 * BadRequestException
 * if a resource with the given name already exists
 */
export async function createFolder(
  ctx: ConjureContext,
  userBearerToken: string | undefined,
  request: CreateFolderRequest,
): Promise<Resource> {
  return conjureFetch(ctx, `/folders`, "POST", request);
}
