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
import type { CreateEnrollmentSetupContextRequest } from "../CreateEnrollmentSetupContextRequest.js";
import type { CreateEnrollmentSetupContextResponse } from "../CreateEnrollmentSetupContextResponse.js";
import type { EnrollmentRid } from "../EnrollmentRid.js";

/**
 * Creates an enrollment setup context. The context is a container for enrollment setup configurations and progress.
 * An enrollment setup link generated for a context uses these configurations to onboard customers to the enrollment.
 *
 * Once a customer onboarding is completed using the context's link, the context is deleted.
 *
 * Throws if the context name already exists in the enrollment, or if the organization RID doesn't belong to the enrollment.
 *
 * Throws if the organization is already used by another context.
 *
 * Requires `control-panel:enrollment:manage-setup-tokens` on the enrollment RID.
 */
export async function createEnrollmentSetupContext(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  request: CreateEnrollmentSetupContextRequest,
): Promise<CreateEnrollmentSetupContextResponse> {
  return conjureFetch(
    ctx,
    `/enrollment-setup-management/enrollment/${enrollmentRid}/context`,
    "POST",
    request,
  );
}
