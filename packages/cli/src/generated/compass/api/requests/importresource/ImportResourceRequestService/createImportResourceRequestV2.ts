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
import type { CreateImportResourceRequestRequest } from "../../../importresource/CreateImportResourceRequestRequest.js";
import type { ImportResourceRequest } from "../../../importresource/ImportResourceRequest.js";

/**
 * Creates a request to import resources to a project.
 *
 * If the project has marking constraints with allowed markings, it creates subtasks to add all imported
 * resources' markings as allowed markings on the project, and grants the specified principals access to those
 * markings. It behaves similarly if project access markings (PAMs, which are deprecated) are present.
 *
 * Throws:
 * - NotFound if the project does not exist or the user does not have read permissions on it
 * - InsufficientPermissions if the user does not have "compass:edit-project" on the project
 * - NotProject if the supplied projectRid is not a project
 */
export async function createImportResourceRequestV2(
  ctx: ConjureContext,
  projectRid: string,
  request: CreateImportResourceRequestRequest,
): Promise<ImportResourceRequest> {
  return conjureFetch(
    ctx,
    `/projects/${projectRid}/import-resource/v2`,
    "POST",
    request,
  );
}
