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
import type { GetResourceContextsRequest } from "../../project/imports/GetResourceContextsRequest.js";
import type { GetResourceContextsResponse } from "../../project/imports/GetResourceContextsResponse.js";

/**
 * For the given project and resources, returns what the resources are in the context of the project. Any
 * resources not found can be assumed to not have any context in the project. compass:view-project-imports is
 * required on the project import gatekeeper node.
 *
 * If a resource is both imported in the project and directly in the project, then it will only be reported
 * as being directly in the project - unless the user does not have permission to read the resource, in which
 * case it will be reported as being imported in the project. Resources that are not registered in Compass but
 * are children of nodes in the project will be reported as being directly in the project.
 */
export async function getResourceContexts(
  ctx: ConjureContext,
  projectRid: string,
  request: GetResourceContextsRequest,
): Promise<GetResourceContextsResponse> {
  return conjureFetch(
    ctx,
    `/projects/imports/${projectRid}/context`,
    "POST",
    request,
  );
}
