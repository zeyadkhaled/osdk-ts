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
import type { EnrollmentRid } from "../../../EnrollmentRid.js";
import type { RegisteredSubdomain } from "../RegisteredSubdomain.js";

/**
 * Returns all subdomains that have been registered for the enrollment.
 *
 * When there is an approval process involved, the subdomain will only be registered (and returned via this
 * endpoint) after the request has been approved, and invoked by the Approvals service.
 *
 * Requires `control-panel:enrollment:view-subdomains` on the enrollment RID, which is granted to users with the
 * view-only "Enrollment settings viewer" role, and to Information Security Officers.
 */
export async function getRegisteredSubdomains(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
): Promise<Array<RegisteredSubdomain>> {
  return conjureFetch(ctx, `/subdomain/enrollments/${enrollmentRid}`, "GET");
}
