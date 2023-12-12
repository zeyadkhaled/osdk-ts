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
import type { CreateFileSystemRequest } from "../CreateFileSystemRequest.js";
import type { CreateFileSystemResponse } from "../CreateFileSystemResponse.js";

/**
 * Creates a new managed file system.
 *
 * Requires the `control-panel:file-system:create` operation on Control Panel's root node, which is only expected
 * to be granted to BLT.
 *
 * Note that as part of the enrollment bootstrapping flow, a default file system is automatically created by
 * Control Panel for each new organization that is part of the enrollment.
 */
export async function createFileSystem(
  ctx: ConjureContext,
  request: CreateFileSystemRequest,
): Promise<CreateFileSystemResponse> {
  return conjureFetch(ctx, `/filesystems`, "POST", request);
}
