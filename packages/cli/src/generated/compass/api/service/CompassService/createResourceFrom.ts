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
import type { CreateResourceFromOption } from "../../CreateResourceFromOption.js";
import type { CreateResourceFromRequest } from "../../CreateResourceFromRequest.js";
import type { Resource } from "../../Resource.js";

/**
 * Creates a resource from another resource. The resource being created must not already exist in Gatekeeper. Any direct markings on the source resource will be also applied to the new resource.
 *
 * Can operate on either service project resources or non service projects resources.
 *
 * The resource is not allowed to be created as a hidden resource unless specified in the options.
 *
 * Throws ForbiddenOperationOnServiceProjectResources if operating on service project resources and the AuthHeader does not have compass:write-service-project.
 *
 * Throws HasDirectlyAppliedMarkings if the resource is being created as a hidden resource and the source resource has directly applied markings.
 *
 * Throws ForbiddenOperationOnHiddenResource if source and/or destination are hidden and CreateResourceFromOption.ALLOW_HIDDEN is not provided.
 *
 * Throws IllegalName if `name` is invalid (see docs for `name` field for more details).
 */
export async function createResourceFrom(
  ctx: ConjureContext,
  userBearerToken: string | undefined,
  rid: string,
  options: Array<CreateResourceFromOption>,
  request: CreateResourceFromRequest,
): Promise<Resource> {
  return conjureFetch(
    ctx,
    `/resources/create-from/${rid}?${new URLSearchParams({
      "options": options.join(","),
    })}`,
    "POST",
    request,
  );
}
