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
import type { ImportResourcesRequest } from "../../project/imports/ImportResourcesRequest.js";

/**
 * Imports the specified resources into the specified project. If the resource is already imported but with
 * different metadata (other than attribution), then the import metadata will be updated.
 *
 * compass:import-resource-to is required on the project and compass:import-resource-from is required on each imported resource.
 *
 * The specified resources cannot be hidden resources. The specified project can be either a service project or a non service project.
 *
 * If any of the specified resources are already directly in the project, those resources will not be imported
 * into the project.
 *
 * Throws ForbiddenOperationOnServiceProjectResources if the projectRid is a service project resource and the AuthHeader does not have compass:write-service-project.
 */
export async function importResources(
  ctx: ConjureContext,
  userBearerToken: string | undefined,
  projectRid: string,
  request: ImportResourcesRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/projects/imports/${projectRid}/import`,
    "POST",
    request,
  );
}
