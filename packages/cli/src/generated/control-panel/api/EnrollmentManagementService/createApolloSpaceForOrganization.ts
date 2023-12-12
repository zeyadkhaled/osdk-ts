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
import type { CreateApolloSpaceForOrganizationResponse } from "../CreateApolloSpaceForOrganizationResponse.js";
import type { CreateApolloSpaceRequest } from "../CreateApolloSpaceRequest.js";
import type { EnrollmentRid } from "../EnrollmentRid.js";
import type { OrganizationRid } from "../OrganizationRid.js";

/**
 * Creates a new Apollo space for the organization specified in the request.
 *
 * That organization must belong to the specified enrollment.
 *
 * Spaces for an organization use the following settings, which are not configurable in the creation
 * request:
 * - They have the same name as that organization;
 * - They are marked with only that organization's marking
 *
 * Initial administrators over the space can be specified in this request or in a subsequent assign admins call,
 * both of these will grant the admins high level Apollo permissions over their space & resources.
 *
 * Requires the `control-panel:enrollment:create-organization` operation on the enrollment RID, which is granted
 * to enrollment administrators. Furthermore, this endpoint must be called in succession to
 * `createOrganizationInEnrollment`, by the same user, within a time period of 3 days.
 */
export async function createApolloSpaceForOrganization(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  organizationRid: OrganizationRid,
  request: CreateApolloSpaceRequest,
): Promise<CreateApolloSpaceForOrganizationResponse> {
  return conjureFetch(
    ctx,
    `/admin/enrollment/${enrollmentRid}/organization/${organizationRid}/create-apollo-space`,
    "POST",
    request,
  );
}
