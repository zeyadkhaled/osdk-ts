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
import type { CreatePrivateNamespaceRequest } from "../CreatePrivateNamespaceRequest.js";
import type { CreatePrivateNamespaceResponse } from "../CreatePrivateNamespaceResponse.js";
import type { EnrollmentRid } from "../EnrollmentRid.js";
import type { OrganizationRid } from "../OrganizationRid.js";

/**
 * Creates a new Compass private namespace for the organization specified in the request.
 *
 * That organization must belong to the specified enrollment.
 *
 * Private namespaces for an organization use the following settings, which are not configurable in the creation
 * request:
 * - They have the same name as that organization;
 * - They are marked with only that organization's marking;
 * - They use that organization's default file system (which may be the environment's fallback file system: see
 * `FileSystemCreationStrategy`);
 * - Their deletion policy is setup as a LAST_OUT policy containing only that organization.
 *
 * The namespace's usage account must be specified and must belong to the enrollment. The namespace's resource
 * queue must also be specified, and belong to the enrollment, if the enrollment has at least one resource queue.
 *
 * Initial namespace owners will be set as specified in `CreatePrivateNamespaceRequest` and are granted access to
 * the organization's marking as described in `CreatePrivateNamespaceRequest`. The namespace-specific EDITOR role
 * will be granted to all users, to allow for easy project creation: this can be changed in the namespace
 * settings following creation.
 *
 * Requires the `control-panel:enrollment:create-organization` operation on the enrollment RID, which is granted
 * to enrollment administrators. Furthermore, this endpoint must be called in succession to
 * `createOrganizationInEnrollment`, by the same user, within a time period of 3 days.
 */
export async function createPrivateNamespaceForOrganization(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  organizationRid: OrganizationRid,
  request: CreatePrivateNamespaceRequest,
): Promise<CreatePrivateNamespaceResponse> {
  return conjureFetch(
    ctx,
    `/admin/enrollment/${enrollmentRid}/organization/${organizationRid}/create-private-namespace`,
    "POST",
    request,
  );
}
