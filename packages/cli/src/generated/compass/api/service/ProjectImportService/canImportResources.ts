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
import type { CanImportResourcesResponse } from "../../project/imports/CanImportResourcesResponse.js";
import type { ImportResourcesRequest } from "../../project/imports/ImportResourcesRequest.js";

/**
 * Checks whether the provided resources can be imported into the specified project.
 *
 * Returns a violation:
 * - If the user doesn't have permission to import resources into the project
 * - If the user doesn't have permission to import a resource from its source
 * - If a resource violates the destination project marking constraints
 *
 * Throws:
 * - NotProject if the destination isn't a project
 * - InvalidImport if a resource is not importable
 * - InsufficientPermissions if the user does not have permission to read a resource
 * - InsufficientPermissions if constraint check exempt was requested and the user does not have permission
 * to request it
 * - InsufficientPermissions if the destination project is a service project and the user does not have
 * permission to write on service projects
 * - InvalidImport if an import name was provided for a resource that is tracked in Compass
 * - NotFound if an import name was not provided for a resource that is not tracked in Compass
 * - InvalidImport if an import name was not provided for a resource that is autosave or a hidden child of an
 * autosave resource
 * - InsufficientPermissions if the request contains imports across file systems and the user does not have
 * permissions to request it
 */
export async function canImportResources(
  ctx: ConjureContext,
  userBearerToken: string | undefined,
  projectRid: string,
  request: ImportResourcesRequest,
): Promise<CanImportResourcesResponse> {
  return conjureFetch(
    ctx,
    `/projects/imports/${projectRid}/can-import`,
    "PUT",
    request,
  );
}
