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
import type { RequestAccessRequest } from "../RequestAccessRequest.js";

/**
 * Requests access to the specified roles on the resource with the given RID.
 * The resource cannot be a hidden resource, nor can it be a service project or in a service project.
 *
 * Also triggers a notification to the creator of the resource and the owners of the project, where the owners
 * are all users who have at least one of the roles in the configurable "grant-access-request-roles" field
 * (only users with `compass:manage` by default).
 *
 * Throws BadRequestException if the specified operation is invalid.
 */
export async function requestAccess(
  ctx: ConjureContext,
  resourceIdentifier: string,
  request: RequestAccessRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/shares/resource/request/${resourceIdentifier}`,
    "POST",
    request,
  );
}
