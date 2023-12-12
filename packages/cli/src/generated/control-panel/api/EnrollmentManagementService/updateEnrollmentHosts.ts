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
import type { UpdateEnrollmentHostsRequest } from "../UpdateEnrollmentHostsRequest.js";
import type { UpdateEnrollmentHostsResponse } from "../UpdateEnrollmentHostsResponse.js";

/**
 * Updates the enrollment hosts, supporting additions and removals at the enrollment and organization level,
 * as well as changing the enrollment default host.
 *
 * Requires the `control-panel:environment:administer` operation on the Control Panel root resource (in the
 * future an operation granted to Enrollment administrators will be checked).
 */
export async function updateEnrollmentHosts(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  request: UpdateEnrollmentHostsRequest,
): Promise<UpdateEnrollmentHostsResponse> {
  return conjureFetch(
    ctx,
    `/admin/enrollment/${enrollmentRid}/hosts`,
    "PUT",
    request,
  );
}
