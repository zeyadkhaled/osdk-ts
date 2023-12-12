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
import type { RemoveImportsRequest } from "../../project/imports/RemoveImportsRequest.js";

/**
 * Removes imports from the project. The specified project can be either a service project or a non service project.
 *
 * Throws
 * ForbiddenOperationOnServiceProjectResources
 * if the projectRid is a service project resource and the AuthHeader does not have
 * compass:write-service-project.
 */
export async function removeImports(
  ctx: ConjureContext,
  userBearerToken: string | undefined,
  projectRid: string,
  request: RemoveImportsRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/projects/imports/${projectRid}/import`,
    "DELETE",
    request,
  );
}
