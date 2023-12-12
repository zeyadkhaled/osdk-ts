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
import type { RequestSubdomainRegistrationOnBehalfOfRequest } from "../RequestSubdomainRegistrationOnBehalfOfRequest.js";
import type { RequestSubdomainRegistrationOnBehalfOfResponse } from "../RequestSubdomainRegistrationOnBehalfOfResponse.js";

/**
 * Creates a request to associate a subdomain to a base domain, setting up an Approval task for the request,
 * that will need to be approved by Information Security Officers of the enrollment that the base domain belongs
 * to.
 *
 * This endpoint is designed to be proxied by other platform services and is not meant to be called directly by
 * end users. The direct caller of this endpoint should have the `control-panel:service-user:request-subdomain`
 * operation on Control Panel's root node, which services should grant to their service user via initial node
 * addition.
 *
 * This endpoint returns the request RID that will have been created, to allow callers to store it internally if
 * needed. This endpoint also reserves the subdomain, making it unavailable for future use as long as the request
 * is open.
 *
 * The credentials of the end user on whose behalf the subdomain is being created should be passed via the
 * `onBehalfOf` argument, and Control Panel will perform the permission checks described in endpoints above on
 * the base domain, throwing ControlPanel:PermissionDenied if these are not satisfied.
 *
 * Throws ControlPanel:InvalidSubdomainRegistrationRequest if the validation described in `canReserveSubdomain`
 * fails for the base domain and subdomain pair. Workflows that create such requests are advised to call the
 * `canReserveSubdomain` first before hitting this endpoint.
 */
export async function requestSubdomainRegistrationOnBehalfOf(
  ctx: ConjureContext,
  onBehalfOf: string,
  request: RequestSubdomainRegistrationOnBehalfOfRequest,
): Promise<RequestSubdomainRegistrationOnBehalfOfResponse> {
  return conjureFetch(
    ctx,
    `/subdomain/request-subdomain-registration-on-behalf-of`,
    "POST",
    request,
  );
}
