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
import type { RestoreEnrollmentPermissionsRequest } from "../RestoreEnrollmentPermissionsRequest.js";
import type { RestoreEnrollmentPermissionsResponse } from "../RestoreEnrollmentPermissionsResponse.js";

/**
 * Grants the `enrollment:administrator` role on the provided enrollment to a user or group. This should be
 * used as a "break the glass" mechanism, in case no user has that role.
 *
 * Requires the `control-panel:environment:administer` operation on the Control Panel root.
 */
export async function restoreEnrollmentPermissions(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  request: RestoreEnrollmentPermissionsRequest,
): Promise<RestoreEnrollmentPermissionsResponse> {
  return conjureFetch(
    ctx,
    `/admin/enrollment/${enrollmentRid}/restore-enrollment-permissions`,
    "PUT",
    request,
  );
}
