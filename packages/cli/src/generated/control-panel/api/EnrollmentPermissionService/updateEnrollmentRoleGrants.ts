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
import type { EnrollmentRoleGrants } from "../EnrollmentRoleGrants.js";
import type { UpdateEnrollmentRoleGrantsRequest } from "../UpdateEnrollmentRoleGrantsRequest.js";

/**
 * Applies the provided set of patches on the enrollment's current role grants, and returns the updated role
 * grants.
 *
 * Requires the `control-panel:enrollment:edit-role-grants` operation on the enrollment RID, which itself should
 * be acquired through a role grant.
 *
 * Only roles which are part of role sets with an ENROLLMENT context can be granted through this endpoint.
 *
 * Throws if the patches conflict, eg. when trying to both add and remove a given principal from a role.
 */
export async function updateEnrollmentRoleGrants(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  request: UpdateEnrollmentRoleGrantsRequest,
): Promise<EnrollmentRoleGrants> {
  return conjureFetch(
    ctx,
    `/enrollment-permission/${enrollmentRid}/role-grants`,
    "PUT",
    request,
  );
}
