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
import type { CreateIngressPatchRequest } from "../CreateIngressPatchRequest.js";
import type { CreateIngressPatchResponse } from "../CreateIngressPatchResponse.js";

/**
 * If the Approvals service is available, creates a pending ingress patch and registers it with Approvals. In
 * this case validation of CIDRs and countries with INFOSEC's allow/deny service is not performed, and will only
 * be performed when the patch is applied.
 *
 * If the Approvals service is not available, and if the CIDRs and countries are allowed by INFOSEC, the patch is
 * applied directly and a history entry is created.
 *
 * Requires `control-panel:enrollment:edit-ingress-configuration` on the enrollment RID.
 *
 * Throws if:
 * - There already exists a pending patch for the domain (in which case this patch should be updated via
 * `updateIngressPatch`).
 * - The patch is invalid from the Control Panel perspective, for instance would result in breaching the limit
 * described in `EnrollmentIngressConfiguration#getMaxCidrsPerDomain`.
 */
export async function createIngressPatch(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  request: CreateIngressPatchRequest,
): Promise<CreateIngressPatchResponse> {
  return conjureFetch(
    ctx,
    `/ingress/enrollment/${enrollmentRid}/create-patch`,
    "POST",
    request,
  );
}
