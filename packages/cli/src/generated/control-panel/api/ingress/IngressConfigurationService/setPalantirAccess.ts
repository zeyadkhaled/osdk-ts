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
import type { EnrollmentIngressConfiguration } from "../EnrollmentIngressConfiguration.js";

/**
 * Sets whether Palantir IPs should be added to the configured allowlists that are pushed to the network
 * layer, for every domain in the enrollment.
 *
 * If never called to disable access, then the default behavior is that Palantir IPs will have access, as that is
 * expected to be the vast majority case.
 *
 * Requires `control-panel:enrollment:edit-ingress-configuration` on the enrollment RID.
 */
export async function setPalantirAccess(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  palantirAccessEnabled: boolean,
): Promise<EnrollmentIngressConfiguration> {
  return conjureFetch(
    ctx,
    `/ingress/enrollment/${enrollmentRid}/palantir-access?${new URLSearchParams(
      { "palantirAccessEnabled": "" + palantirAccessEnabled },
    )}`,
    "PUT",
  );
}
