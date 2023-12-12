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
import type { BatchGetProjectFileSystemIdRequest } from "../../request/BatchGetProjectFileSystemIdRequest.js";
import type { BatchGetProjectFileSystemIdResponse } from "../../response/BatchGetProjectFileSystemIdResponse.js";

/**
 * Given the RID of any Compass resource, this returns the file system ID of the project that resource is contained in.
 * The result will not contain an entry for any rids which do not correspond to a Compass resource, that the user does
 * not have `compass:read-resource` permission for, or that are not contained in a project.
 */
export async function getFileSystemIdsForProjects(
  ctx: ConjureContext,
  request: BatchGetProjectFileSystemIdRequest,
): Promise<BatchGetProjectFileSystemIdResponse> {
  return conjureFetch(ctx, `/batch/projectFileSystemId`, "POST", request);
}
