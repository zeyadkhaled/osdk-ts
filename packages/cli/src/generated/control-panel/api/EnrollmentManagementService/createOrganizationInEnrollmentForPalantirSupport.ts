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
import type { CreateOrganizationInEnrollmentForPalantirSupportRequest } from "../CreateOrganizationInEnrollmentForPalantirSupportRequest.js";
import type { CreateOrganizationInEnrollmentResponse } from "../CreateOrganizationInEnrollmentResponse.js";
import type { EnrollmentRid } from "../EnrollmentRid.js";

/**
 * Creates a special organization that is meant for Palantir centralized support teams (i.e. Customer Success
 * Services, also known as CSS) to provide in-stack support to a customer.
 *
 * When created, the RID of this special organization can be retrieved via the
 * `EnrollmentInfo#getPalantirSupportOrganizationRid` field - use the `getEnrollmentInfos` endpoint to retrieve
 * this data.
 *
 * There can be at most one support organization per enrollment.
 *
 * This organization will be special-cased by the Control Panel B/E in the following ways:
 *
 * - At creation time, cross-organization visibility will be turned on for users and groups between it and the
 * enrollment's other organizations.
 * - At creation time, it will be marked as not having a file system, which will prevent users in this
 * organization from getting a home folder in Compass.
 * - Initial administrative roles on this organization will be granted to the group defined in the
 * `conf.runtime.enrollment-management-admins` Control Panel configuration, which is the Environment
 * administrative group. On typical multi-tenant stacks, this corresponds to BLT. In the future, this may be
 * changed to a group coming from the authentication provider that users of the organization will be logging in
 * from.
 * - It will not count towards an enrollment's organization creation limit.
 *
 * Using this endpoint requires either `control-panel:environment:administer` (granted to Environment
 * administrators) or `control-panel:enrollment:create-organization` (granted to Enrollment administrators) on
 * the enrollment RID.
 */
export async function createOrganizationInEnrollmentForPalantirSupport(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  request: CreateOrganizationInEnrollmentForPalantirSupportRequest,
): Promise<CreateOrganizationInEnrollmentResponse> {
  return conjureFetch(
    ctx,
    `/admin/enrollment/${enrollmentRid}/create-palantir-support-organization`,
    "POST",
    request,
  );
}
