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
import type { MoveOrganizationsAndHostsRequest } from "../MoveOrganizationsAndHostsRequest.js";
import type { MoveOrganizationsAndHostsResponse } from "../MoveOrganizationsAndHostsResponse.js";

/**
 * Move organization and hosts between enrollments, while preserving the ingress and CORS configuration for
 * domains. The end state must respect the Control Panel invariants. Notably:
 *
 * - An enrollment default host must be present in the enrollment hosts
 * - An organization's hosts must be part of the owning enrollment's hosts
 * - The hosts used by authentication providers configured for an enrollment must be part of the enrollment hosts
 *
 * Domains cannot be moved between enrollments that have different ingress migration statuses.
 *
 * This method is currently only moving primary hosts and is not suitable for organizations that use additional
 * hosts. Any existing additional hosts on organizations that are moved are wiped.
 *
 * As mentioned on the `removeOrganizationFromEnrollment` endpoint doc, invariants imposed by external services
 * might be broken. Reach out to the product team before using it. Examples include:
 * - Resource management primitives (e.g. usage accounts) may behave inappropriately after the move (e.g. a
 * user's home folder was assigned an initial usage account on creation that belonged to the initial enrollment).
 * Please discuss such moves with the resource management product team for resource management considerations.
 * - There may be multiple other services that reason about enrollment/organization relationships and which may
 * not adequately support "move" semantics. An example of that are Code Workbook profiles, which are enrollment
 * scoped resources, and may be organization-marked with organizations belonging to the profile's enrollment.
 *
 * If a moved host had subdomains configured for it via the `EnrollmentSubdomainService`, Gatekeeper policies of
 * associated registration requests, and data stored in the Approvals service, will still point to the previous
 * enrollment. These can be updated out-of-band after calling this endpoint, if that is necessary.
 *
 * Requires `control-panel:environment:administer` on the Control Panel root.
 */
export async function moveOrganizationsAndHosts(
  ctx: ConjureContext,
  request: MoveOrganizationsAndHostsRequest,
): Promise<MoveOrganizationsAndHostsResponse> {
  return conjureFetch(
    ctx,
    `/admin/move-organizations-and-hosts`,
    "PUT",
    request,
  );
}
