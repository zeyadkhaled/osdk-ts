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
import type { CorsConfiguration } from "../CorsConfiguration.js";
import type { PatchCorsConfigurationForDomainRequest } from "../PatchCorsConfigurationForDomainRequest.js";

/**
 * Patches the CORS configuration for an enrollment's domain, and returns the updated configuration.
 *
 * Requires `control-panel:enrollment:edit-cors-configuration` on the enrollment RID.
 *
 * We currently enforce a limit of 50 origins maximum per domain.
 */
export async function patchCorsConfigurationForDomain(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  request: PatchCorsConfigurationForDomainRequest,
): Promise<CorsConfiguration> {
  return conjureFetch(ctx, `/cors/enrollment/${enrollmentRid}`, "PUT", request);
}
