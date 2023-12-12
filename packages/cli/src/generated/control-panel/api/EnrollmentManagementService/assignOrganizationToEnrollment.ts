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
import type { AssignOrganizationToEnrollmentRequest } from "../AssignOrganizationToEnrollmentRequest.js";
import type { EnrollmentRid } from "../EnrollmentRid.js";
import type { OrganizationRid } from "../OrganizationRid.js";

/**
 * Assigns an organization to an enrollment.
 *
 * The organization must not already be assigned to another enrollment.
 *
 * This endpoint is mainly designed to be used in cases where an environment is taking on Control Panel for the
 * first time but is already using Multipass organizations, in which case all the environment's organizations
 * must be assigned to enrollments, through this endpoint.
 *
 * Generally, this endpoint should not be used for other purposes. Notably, once Control Panel is in use, new
 * organization creations should use the `createOrganizationInEnrollment` endpoint, rather than creating them
 * through the Multipass endpoint and then assigning them to an enrollment directly.
 *
 * Warning: if using this endpoint to migrate organizations between enrollments, refer to the documentation of
 * the `removeOrganizationFromEnrollment` endpoint.
 *
 * Requires the `control-panel:environment:administer` operation on `ri.control-panel..resource.root`.
 */
export async function assignOrganizationToEnrollment(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  organizationRid: OrganizationRid,
  request: AssignOrganizationToEnrollmentRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/admin/enrollment/${enrollmentRid}/organization/${organizationRid}/assign`,
    "PUT",
    request,
  );
}
