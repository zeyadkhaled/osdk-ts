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
import type { InternetDomainName } from "../../../InternetDomainName.js";
import type { UnregisterSubdomainResponse } from "../UnregisterSubdomainResponse.js";

/**
 * Unregisters a subdomain. If Control Panel is managing the subdomain via infrastructure APIs, then this
 * will also un-manage the subdomain at the infrastructure layer. If the subdomain was associated to an Approvals
 * request, then the metadata for that request will also be deleted (and then not returned from the
 * `getSubdomainRegistrationRequests` endpoint) from Control Panel (but not necessarily from Approvals).
 *
 * Requires control-panel:enrollment:edit-subdomains on the enrollment RID that the subdomain belongs to, which
 * is granted to Information Security Officers.
 *
 * This endpoint does not perform any cleanup in other services that may be relying on the subdomain. As such,
 * this endpoint should only be used purposefully in situations where the subdomain can be safely removed.
 */
export async function unregisterSubdomain(
  ctx: ConjureContext,
  subdomain: InternetDomainName,
): Promise<UnregisterSubdomainResponse> {
  return conjureFetch(ctx, `/subdomain/${subdomain}`, "DELETE");
}
