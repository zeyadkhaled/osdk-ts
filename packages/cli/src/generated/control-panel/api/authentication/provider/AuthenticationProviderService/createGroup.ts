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
import type { AuthenticationProviderRid } from "../../../AuthenticationProviderRid.js";
import type { CreateGroupRequest } from "../CreateGroupRequest.js";
import type { CreateGroupResponse } from "../CreateGroupResponse.js";

/**
 * Creates a group that will be referenced in a provider's group assignment rule groups.
 * The group will be created in a realm for the enrollment the provider belongs to (`$enrollment-locator-uuid:groups`).
 *
 * The group must be marked with organizations in the provider's enrollment.
 *
 * Requires `control-panel:authentication-provider:edit` on the provider RID.
 */
export async function createGroup(
  ctx: ConjureContext,
  providerRid: AuthenticationProviderRid,
  request: CreateGroupRequest,
): Promise<CreateGroupResponse> {
  return conjureFetch(
    ctx,
    `/authentication-provider/${providerRid}/group`,
    "POST",
    request,
  );
}
