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
import type { GetDefaultFileSystemResponse } from "../GetDefaultFileSystemResponse.js";

/**
 * Returns the default file system of the caller's organization.
 *
 * An organization may have at most one default file system. This may possibly be the environment's default file
 * system, subject to the same conditions as in `getFileSystems` (notably, the organization must not explicitly
 * own any file system, and fallback to the environment's default file system must be enabled).
 *
 * An empty optional is returned if no default file system exists for the user's organization.
 */
export async function getDefaultFileSystem(
  ctx: ConjureContext,
): Promise<GetDefaultFileSystemResponse> {
  return conjureFetch(ctx, `/filesystems/default`, "GET");
}
