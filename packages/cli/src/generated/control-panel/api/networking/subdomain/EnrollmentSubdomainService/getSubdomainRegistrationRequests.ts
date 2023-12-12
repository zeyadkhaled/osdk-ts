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
import type { SubdomainRegistrationRequest } from "../SubdomainRegistrationRequest.js";
import type { SubdomainRegistrationRequestRid } from "../SubdomainRegistrationRequestRid.js";

/**
 * Provides metadata for subdomain creation requests. This endpoint will return metadata for pending, closed,
 * and approved/invoked requests. Note however that calling `unregisterSubdomain` will result in deleting
 * request metadata from Control Panel, if it existed.
 *
 * Requires `control-panel:subdomain-registration-request:view` on the request RIDs. Requests that either do not
 * exist, or on which the caller does not have permissions, will be omitted from the response. This operation is
 * granted:
 *
 * - If the caller has `control-panel:enrollment:view-subdomains` on the enrollment associated to the Approval
 * request, which is granted to users with the "Enrollment settings viewer" role, and to Information Security
 * Officers.
 * - In a context-dependent way, based on the `SubdomainRegistrationReason` passed into the
 * `requestSubdomainRegistrationOnBehalfOf` endpoint used to create the request. For example, for subdomains
 * associated to Artifact Websites, `control-panel:subdomain-registration-request:view` is granted on a request
 * RID if a user has `artifacts:sites:manage-domains` on the Artifact repository RID associated to the
 * subdomain.
 *
 * Throws if more than 100 RIDs are requested.
 */
export async function getSubdomainRegistrationRequests(
  ctx: ConjureContext,
  requestRids: Array<SubdomainRegistrationRequestRid>,
): Promise<
  Record<SubdomainRegistrationRequestRid, SubdomainRegistrationRequest>
> {
  return conjureFetch(
    ctx,
    `/subdomain/subdomain-registration-requests`,
    "PUT",
    requestRids,
  );
}
