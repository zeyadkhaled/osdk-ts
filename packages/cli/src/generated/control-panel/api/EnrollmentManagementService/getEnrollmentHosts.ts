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
import type { GetEnrollmentHostsResponse } from "../GetEnrollmentHostsResponse.js";

/**
 * Returns metadata about the hosts associated to the enrollment and its organizations.
 *
 * Refer to the `Host` type documentation for more detail of what a host is.
 *
 * Users of this data are advised to perform normalization if string comparisons are used on it.
 *
 * Requires `control-panel:enrollment:view-enrollment-hosts` on the enrollment RID. This permission is granted to
 * both the Authentication administrator role and the Information Security Officer role (and therefore also to
 * Enrollment administrators), as well as to environment administrators.
 */
export async function getEnrollmentHosts(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
): Promise<GetEnrollmentHostsResponse> {
  return conjureFetch(
    ctx,
    `/admin/enrollment/${enrollmentRid}/hosts/v2`,
    "GET",
  );
}
