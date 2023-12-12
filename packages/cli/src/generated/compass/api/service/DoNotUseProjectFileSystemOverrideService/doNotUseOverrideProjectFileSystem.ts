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

/**
 * Overrides the file system id for the specified Compass Project.
 *
 * Built specifically for one-off usage and will be removed in an upcoming release.
 * Does not validate that the file system id is a configured file system.
 * Does not validate any permissions on the file system represented by the file system id (if any).
 * Does not validate any namespace constraints when setting the project file system.
 *
 * Throws InsufficientPermissions if user doesn't have the compass:do-not-use-file-system-migration permission on
 * `ri.compass.{instance}.resource.admin`.
 */
export async function doNotUseOverrideProjectFileSystem(
  ctx: ConjureContext,
  rid: string,
  fileSystemId: string,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/do-not-use-project-file-system-override/${rid}?${new URLSearchParams({
      "fileSystemId": fileSystemId,
    })}`,
    "PUT",
  );
}
