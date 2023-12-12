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
import type { GetOrganizationCreationInfoResponse } from "../GetOrganizationCreationInfoResponse.js";

/**
 * Returns metadata about organization creation that informs a caller on how `createOrganizationInEnrollment` will behave.
 * If an enrollment RID is provided, the caller needs to have the `control-panel:enrollment:create-organization` operation on that RID. It is expected that this RID is provided when the workflow being performed is that of an enrollment administrator adding additional organizations to an existing enrollment.
 * If an enrollment RID is not provided, the caller needs to have the `control-panel:environment:administer` operation on the Control Panel root. It is expected that this happens only for the flow of creating an enrollment with an initial organization (i.e. when an enrollment RID is not available yet).
 */
export async function getOrganizationCreationInfo(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid | undefined,
): Promise<GetOrganizationCreationInfoResponse> {
  return conjureFetch(
    ctx,
    `/admin/organization-creation-info?${new URLSearchParams({
      "enrollmentRid": "" + enrollmentRid,
    })}`,
    "GET",
  );
}
