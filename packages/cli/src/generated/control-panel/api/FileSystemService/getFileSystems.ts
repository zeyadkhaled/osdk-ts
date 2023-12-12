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
import type { GetFileSystemsResponse } from "../GetFileSystemsResponse.js";

/**
 * Returns a set of file systems that the user has access to. This includes both legacy file systems (that have
 * not been migrated to managed file systems) and managed file systems (which may have previously been legacy
 * file systems, or created dynamically / programmatically).
 *
 * A user has access to a file system if they have the `control-panel:file-system:view` operation on the file
 * system's Gatekeeper RID. This RID is the file system's Catalog RID for managed file systems, and an internal
 * RID managed by Control Panel (not exposed through any endpoint), for legacy file systems.
 *
 * In practice, access to a file system means being a primary member, or a guest member, of _one_ of the
 * organizations owning the file system (i.e. requires having access to one of these organizations' marking).
 *
 * Note that currently, managed file systems created through API have exactly one owning organization, but legacy
 * file systems, or managed file systems migrated from legacy file systems, may have multiple owning
 * organizations.
 *
 * If no such file system can be identified, then the environment's configured default file system _may_ be
 * returned through this endpoint, under certain conditions (for example, the environment must support falling
 * back to the default file system: see Control Panel's `enable-default-file-system-fallback` configuration
 * option).
 */
export async function getFileSystems(
  ctx: ConjureContext,
): Promise<GetFileSystemsResponse> {
  return conjureFetch(ctx, `/filesystems`, "GET");
}
