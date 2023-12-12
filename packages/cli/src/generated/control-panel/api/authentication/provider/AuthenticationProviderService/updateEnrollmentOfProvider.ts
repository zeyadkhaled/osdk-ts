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
import type { AuthenticationProviderRid } from "../../../AuthenticationProviderRid.js";
import type { EnrollmentRid } from "../../../EnrollmentRid.js";
import type { UpdateEnrollmentOfProviderRequest } from "../UpdateEnrollmentOfProviderRequest.js";

/**
 * Moves an existing authentication provider under another enrollment.
 *
 * This endpoint is meant for migration-type workflows where for example an organization tied to an enrollment is migrated to another enrollment.
 * Please use it only under the guidance of the product team.
 *
 * If the authentication provider uses group assignment rules, the corresponding groups will need to be
 * updated to be in the groups realm for the new enrollment, and the groups' organizations will need to be
 * updated to be organizations in the enrollment.
 *
 * Requires `control-panel:authentication-provider:edit` on the provider RID and on the new enrollment RID.
 */
export async function updateEnrollmentOfProvider(
  ctx: ConjureContext,
  providerRid: AuthenticationProviderRid,
  enrollmentRid: EnrollmentRid,
  request: UpdateEnrollmentOfProviderRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/authentication-provider/${providerRid}/enrollment/${enrollmentRid}`,
    "PUT",
    request,
  );
}
