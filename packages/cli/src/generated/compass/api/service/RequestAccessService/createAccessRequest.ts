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
import type { CreateAccessRequestRequest } from "../../request/CreateAccessRequestRequest.js";
import type { CreateAccessRequestResponse } from "../../request/CreateAccessRequestResponse.js";

/**
 * Throws:
 * - InvalidAccessRequest if:
 * - The requested resource is either: hidden, a service resource, directly trashed, or is not a project.
 * - If for a InternalRealmGroupAdditionSubRequest:
 * - The group requested is not on project
 * - The group is deleted
 * - The request principal is a group and the requesting user is not a member of the group
 * - The group and principal are already present in another group addition subrequest
 * - The expiration is not in the future or doesn't satisfy the group's expiration settings
 * - If for a RoleGrantSubRequest: the request principal is a group the requesting user isn't a member of,
 * or the role is invalid, or the project is marked.
 * - NotFound if the resource doesn't exist, or the user doesn't have any permission on
 * the resource or its project preview.
 */
export async function createAccessRequest(
  ctx: ConjureContext,
  rid: string,
  request: CreateAccessRequestRequest,
): Promise<CreateAccessRequestResponse> {
  return conjureFetch(ctx, `/request-access/request/${rid}`, "POST", request);
}
