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
import type { GetImportRidsRequest } from "../../project/imports/GetImportRidsRequest.js";
import type { GetImportRidsResponse } from "../../project/imports/GetImportRidsResponse.js";

/**
 * Returns a page of project import RIDs for the specified project.
 *
 * Throws:
 * - UnrecognizedImportType if the specified import type is unknown
 * - NotFound if the specified project does not exist or the user does not have read access
 * - NotProject if the specified rid is not an project rid
 * - InsufficientPermissions if user does not have compass:view-project-imports on the project
 */
export async function getImportRids(
  ctx: ConjureContext,
  projectRid: string,
  request: GetImportRidsRequest,
): Promise<GetImportRidsResponse> {
  return conjureFetch(
    ctx,
    `/projects/imports/${projectRid}/rids`,
    "POST",
    request,
  );
}
