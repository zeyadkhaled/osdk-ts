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
import type { GetImportingProjectsRequest } from "../../project/imports/GetImportingProjectsRequest.js";
import type { GetImportingProjectsResponse } from "../../project/imports/GetImportingProjectsResponse.js";

/**
 * Gets a map of resource to all the projects the specified resource is imported into.
 * "compass:view-project-imports" is required on the projects otherwise they will be filtered out from the
 * result.
 */
export async function getImportingProjectsForResources(
  ctx: ConjureContext,
  request: GetImportingProjectsRequest,
): Promise<GetImportingProjectsResponse> {
  return conjureFetch(
    ctx,
    `/projects/imports/importing-projects`,
    "POST",
    request,
  );
}
