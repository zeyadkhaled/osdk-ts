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
import type { PutResourceOption } from "../../PutResourceOption.js";
import type { PutResourceRequest } from "../../PutResourceRequest.js";
import type { Resource } from "../../Resource.js";

/**
 * Similar to putResource, but creates or updates a resource in a service project. Clients must pass in a service
 * user token with service project write permissions in addition to the standard user token. Does not allow the
 * creation of hidden resources.
 *
 * Throws the following errors:
 *
 * ForbiddenOperationOnServiceProjectResources
 * if the rid or resourceRequest's `parentRid` are service project resources and the AuthHeader
 * does not have `compass:write-service-project`.
 *
 * InsufficientPermissions
 * if service user token does not have service project write permissions
 *
 * BadRequestException
 * if a resource with the same name already exists in the containing folder or if the Resource did not have the
 * correct parent in Gatekeeper
 *
 * NotFoundException
 * if the resource associated with resourceRequest's parentId does not exist in Compass
 *
 * CannotChangeParentWithoutSettingAllowUpdatingParent
 * if `parentRid` was provided and the resource already exists in Compass with a different parent RID, but `PutResourceOption.ALLOW_UPDATING_PARENT` was not specified
 */
export async function putServiceProjectResource(
  ctx: ConjureContext,
  rid: string,
  userBearerToken: string,
  putResourceOptions: Array<PutResourceOption>,
  resourceRequest: PutResourceRequest,
): Promise<Resource> {
  return conjureFetch(
    ctx,
    `/resources/service-projects/${rid}?${new URLSearchParams({
      "putResourceOptions": putResourceOptions.join(","),
    })}`,
    "PUT",
    resourceRequest,
  );
}
