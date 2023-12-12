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
import type { GetImportsRequest } from "../../project/imports/GetImportsRequest.js";
import type { GetImportsResponse } from "../../project/imports/GetImportsResponse.js";

/**
 * Retrieves the imports for the specified project. "compass:view-project-imports" is required on the project
 * import gatekeeper node which is a different node than the project gatekeeper node. Permissions to the import
 * node can be granted by granting roles explicitly to the project node but will not be inherited from the
 * project's hierarchy for private/discoverable projects.
 */
export async function getImports(
  ctx: ConjureContext,
  projectRid: string,
  request: GetImportsRequest,
): Promise<GetImportsResponse> {
  return conjureFetch(ctx, `/projects/imports/${projectRid}`, "POST", request);
}
