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
import type { EnrollmentInfosResponse } from "../EnrollmentInfosResponse.js";
import type { EnrollmentRid } from "../EnrollmentRid.js";

/**
 * Similar to `getAllEnrollmentInfos`, but will only include enrollments that are being specifically requested,
 * and that are discoverable. See documentation of `getAllEnrollmentInfos` for what it means for an enrollment
 * to be discoverable.
 *
 * There is a batch limit of 500 RIDs on this endpoint.
 */
export async function getEnrollmentInfos(
  ctx: ConjureContext,
  enrollmentRids: Array<EnrollmentRid>,
): Promise<EnrollmentInfosResponse> {
  return conjureFetch(ctx, `/admin/enrollment/infos`, "PUT", enrollmentRids);
}
