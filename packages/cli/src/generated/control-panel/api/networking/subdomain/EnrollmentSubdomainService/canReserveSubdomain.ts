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
import type { CanReserveSubdomainRequest } from "../CanReserveSubdomainRequest.js";
import type { CanReserveSubdomainResult } from "../CanReserveSubdomainResult.js";

/**
 * Checks whether a subdomain may be reserved/registered for a given base domain, and is expected to be called
 * prior to `requestSubdomainRegistrationOnBehalfOf` to ensure that such a request will succeed.
 *
 * See documentation of `CanReserveSubdomainResult` for details about what this endpoint can return.
 *
 * Throws Default:PermissionDenied if the caller does not satisfy the permission requirements on the base
 * domain specified in the `getBaseDomains` endpoint documentation: the caller must be able to discover the
 * enrollment that the base domain belongs to, as well as an organization which uses that base domain.
 */
export async function canReserveSubdomain(
  ctx: ConjureContext,
  request: CanReserveSubdomainRequest,
): Promise<CanReserveSubdomainResult> {
  return conjureFetch(ctx, `/subdomain/can-reserve-subdomain`, "PUT", request);
}
