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
import type { EnrollmentRid } from "../EnrollmentRid.js";
import type { OrganizationRid } from "../OrganizationRid.js";

/**
 * Removes an organization from an enrollment.
 *
 * Warning: this only removes the association between the enrollment and the organization in the Control Panel
 * store and should only be used to move organizations between different enrollments if this becomes necessary,
 * by using subsequently the `addOrganizationToEnrollment` endpoint. Doing this for organizations that have
 * already been used should only be attempted after discussion with the product team. Notably, an incomplete list
 * of things to consider are:
 *
 * - Users from that organization are likely still logging in through an authentication provider belonging to the
 * enrollment the organization was assigned to, which breaks Control Panel invariants. We support updating
 * a provider's enrollment in the case where providers are already separated between organizations: see the
 * relevant endpoint in `AuthenticationProviderService`.
 * - Once the organization is moved to a new enrollment, its host, i.e. the domain its users use to log into
 * and use the platform, will need to change, since it must belong to the enrollment, and enrollments cannot
 * share hosts.
 * - Resource management primitives (e.g. usage accounts) may behave inappropriately after the move (e.g. a
 * user's home folder was assigned an initial usage account on creation that belonged to the initial enrollment).
 * Please discuss such moves with the resource management product team for resource management considerations.
 * - There may be multiple other services that reason about enrollment/organization relationships and which may
 * not adequately support "move" semantics. An example of that are Code Workbook profiles, which are enrollment
 * scoped resources, and may be organization-marked with organizations belonging to the profile's enrollment.
 *
 * Requires the `control-panel:environment:administer` operation on `ri.control-panel..resource.root`.
 */
export async function removeOrganizationFromEnrollment(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  organizationRid: OrganizationRid,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/admin/enrollment/${enrollmentRid}/organization/${organizationRid}/remove`,
    "PUT",
  );
}
