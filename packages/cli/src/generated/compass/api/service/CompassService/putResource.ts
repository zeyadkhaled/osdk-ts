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
 * Create or update a resource with values from the resource request.
 *
 * Can operate on either service project resources or non service projects resources.
 *
 * Clients do not need to create the Gatekeeper node for the new resource unless they choose to omit specifying the CREATE_GATEKEEPER_NODE PutResourceOption. If the option is omitted, then the new resource must already exist in Gatekeeper under the given parentRid specified in the PutResourceRequest.
 *
 * The resource is not allowed to be created as a hidden resource unless specified in the putResourceOptions.
 *
 * Resources should be created only at human scale. Any resources that are machine-generated or generated at
 * high scale should not be a Compass resource, not even as a hidden resource.
 *
 * When updating an existing resource, `parentRid` should not be specified unless the `ALLOW_UPDATING_PARENT` PutResourceOption is specified. If the option is not specified, and `parentRid` is specified and different to the existing parent, this endpoint will throw.
 *
 * Throws:
 * ForbiddenOperationOnServiceProjectResources if the rid or resourceRequest's `parentRid` are service project resources and the AuthHeader does not have `compass:write-service-project`
 * BadRequestException if a resource with the same name already exists in the containing folder or if the Resource did not have the correct parent in Gatekeeper
 * NotFoundException if the resource associated with resourceRequest's `parentRid` does not exist in Compass
 * CannotChangeParentWithoutSettingAllowUpdatingParent if `parentRid` was provided and the resource already exists in Compass with a different parent RID, but `PutResourceOption.ALLOW_UPDATING_PARENT` was not specified
 * IllegalName if `name` is invalid (see docs for `name` field for more details)
 */
export async function putResource(
  ctx: ConjureContext,
  userBearerToken: string | undefined,
  rid: string,
  putResourceOptions: Array<PutResourceOption>,
  resourceRequest: PutResourceRequest,
): Promise<Resource> {
  return conjureFetch(
    ctx,
    `/resources/${rid}?${new URLSearchParams({
      "putResourceOptions": putResourceOptions.join(","),
    })}`,
    "PUT",
    resourceRequest,
  );
}
