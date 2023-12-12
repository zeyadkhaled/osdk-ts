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
import type { SetNamespaceFileSystemId } from "../../request/SetNamespaceFileSystemId.js";

/**
 * Sets the filesystem for a namespace (the filesystem ID must be empty in the namespace settings).
 *
 * Throws:
 * NotNamespace if rid is not a Compass namespace rid
 * InsufficientPermissions if the user doesn't have permission to update the Compass namespace
 * UsersNamespaceOperationForbidden if trying to update the Users namespace
 * FileSystemInsufficientPermissions if the user doesn't have permission to use this filesystem
 * FileSystemAlreadySet if the filesystem is already set for this namespace
 */
export async function setNamespaceFileSystem(
  ctx: ConjureContext,
  rid: string,
  request: SetNamespaceFileSystemId,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/hierarchy/v2/namespaces/${rid}/fileSystemId`,
    "PUT",
    request,
  );
}
