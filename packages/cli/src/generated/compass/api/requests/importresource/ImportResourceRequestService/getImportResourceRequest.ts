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
import type { ImportResourceRequest } from "../../../importresource/ImportResourceRequest.js";
import type { ImportResourceRequestTaskRid } from "../../../importresource/ImportResourceRequestTaskRid.js";

/**
 * Retrieves an existing request.
 *
 * Throws:
 * - NotFound if the task does not exist or the user does not have "compass:read-resource" on the project
 */
export async function getImportResourceRequest(
  ctx: ConjureContext,
  taskRid: ImportResourceRequestTaskRid,
): Promise<ImportResourceRequest> {
  return conjureFetch(
    ctx,
    `/projects/import-resource-requests/${taskRid}`,
    "GET",
  );
}
