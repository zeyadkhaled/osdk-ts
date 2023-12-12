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
import type { GetEffectiveRoleGrantsRequest } from "../../project/GetEffectiveRoleGrantsRequest.js";
import type { GetEffectiveRoleGrantsResponse } from "../../project/GetEffectiveRoleGrantsResponse.js";

/**
 * Computes the effective role grants on a resource, taking into account role inheritance and Ignore Inherited
 * Permissions.
 *
 * No more than 100 resources may be queried at once.
 */
export async function getEffectiveRoleGrants(
  ctx: ConjureContext,
  request: GetEffectiveRoleGrantsRequest,
): Promise<GetEffectiveRoleGrantsResponse> {
  return conjureFetch(
    ctx,
    `/hierarchy/v2/roles/effective/grants`,
    "PUT",
    request,
  );
}
