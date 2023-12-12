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
import type { EnrollmentRid } from "../../EnrollmentRid.js";
import type { EnrollmentLimitInfo } from "../EnrollmentLimitInfo.js";
import type { LimitType } from "../LimitType.js";

/**
 * Returns the limits for an enrollment. Requires `control-panel:environment:administer` on Control Panel's root
 * node.
 *
 * This endpoint is designed for environment administrators who should be able to view all limits. Retrieving
 * particular limits (e.g. the organization limit as part of the organization creation workflow) should be done
 * through dedicated endpoints.
 */
export async function getEnrollmentLimits(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  limitTypes: Array<LimitType>,
): Promise<Record<LimitType, EnrollmentLimitInfo>> {
  return conjureFetch(
    ctx,
    `/limits/enrollment/${enrollmentRid}`,
    "PUT",
    limitTypes,
  );
}
