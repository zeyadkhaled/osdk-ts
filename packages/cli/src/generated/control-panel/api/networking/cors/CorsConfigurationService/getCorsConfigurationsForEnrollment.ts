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
import type { GetCorsConfigurationsForEnrollmentResponse } from "../GetCorsConfigurationsForEnrollmentResponse.js";

/**
 * Returns CORS configurations for all of the enrollment's domains.
 *
 * Requires `control-panel:enrollment:view-cors-configuration` on the enrollment RID.
 */
export async function getCorsConfigurationsForEnrollment(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
): Promise<GetCorsConfigurationsForEnrollmentResponse> {
  return conjureFetch(ctx, `/cors/enrollment/${enrollmentRid}`, "GET");
}
