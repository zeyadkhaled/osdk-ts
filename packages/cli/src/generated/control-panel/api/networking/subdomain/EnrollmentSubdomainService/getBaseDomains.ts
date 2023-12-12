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
import type { BaseDomainInfo } from "../BaseDomainInfo.js";

/**
 * Given a discoverable enrollment, returns the base domains that can have subdomains registered for them.
 * As opposed to the `getEnrollmentHosts` endpoint in the `EnrollmentManagementService`, this endpoint is
 * designed to be called by users who are not necessarily enrollment administrators / Information Security
 * Officers. This endpoint will also perform filtering of an enrollment's domains in the following way: a domain
 * will only be returned if it is set as an organization's domain, for an organization discoverable by the
 * caller which belongs to the enrollment.
 */
export async function getBaseDomains(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
): Promise<Array<BaseDomainInfo>> {
  return conjureFetch(
    ctx,
    `/subdomain/enrollments/${enrollmentRid}/base-domains`,
    "GET",
  );
}
