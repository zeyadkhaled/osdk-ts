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
import type { GetResourceRolesRequest } from "../../project/roles/GetResourceRolesRequest.js";
import type { GetResourceRolesResult } from "../../project/roles/GetResourceRolesResult.js";

/**
 * Gets the roles grants for a set of resources. Only returns results for resources the caller has permission
 * to see (by having either the gatekeeper:view-resource or compass:read-resource operation on it). It is
 * recommended for clients to query up to 200 resources per call.
 */
export async function getResourceRoles(
  ctx: ConjureContext,
  request: GetResourceRolesRequest,
): Promise<GetResourceRolesResult> {
  return conjureFetch(ctx, `/roles`, "POST", request);
}
