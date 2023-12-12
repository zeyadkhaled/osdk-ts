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
import type { RestoreApolloPermissionsRequest } from "../RestoreApolloPermissionsRequest.js";
import type { RestoreApolloPermissionsResponse } from "../RestoreApolloPermissionsResponse.js";

/**
 * Assigns the top level Apollo permissions on the space associated with the provided organization to a user
 * or group. This operation is additive, and does not override any existing admins. This should be used as a
 * "break the glass" mechanism, in cases where tenants have lost the ability to assign these roles/permissions
 * directly in Apollo.
 *
 * Requires the `control-panel:environment:administer` operation on the Control Panel root.
 */
export async function restoreApolloPermissions(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  request: RestoreApolloPermissionsRequest,
): Promise<RestoreApolloPermissionsResponse> {
  return conjureFetch(
    ctx,
    `/admin/enrollment/${enrollmentRid}/restore-apollo-permissions`,
    "PUT",
    request,
  );
}
