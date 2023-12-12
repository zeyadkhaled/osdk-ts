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
import type { DeleteFileSystemResponse } from "../DeleteFileSystemResponse.js";
import type { FileSystemCatalogRid } from "../FileSystemCatalogRid.js";

/**
 * Deletes a managed file system. This immediately removes the file system from Control Panel's store (so it will
 * not be returned via endpoints like `getFileSystems` anymore) and triggers cleanup in Catalog, which happens
 * asynchronously.
 *
 * Throws if the file system is still being used on a namespace or if this file system was migrated from the
 * environment default (e.g. `s3a`).
 *
 * Requires the `control-panel:file-system:create` operation on Control Panel's root node, which is only expected
 * to be granted to BLT.
 *
 * Note that the typical way to delete file systems is not via use of this endpoint, but via Deletion Coordinator
 * integration when there are no more owning organizations for file systems.
 */
export async function deleteFileSystem(
  ctx: ConjureContext,
  fileSystemRid: FileSystemCatalogRid,
): Promise<DeleteFileSystemResponse> {
  return conjureFetch(ctx, `/filesystems/${fileSystemRid}`, "DELETE");
}
