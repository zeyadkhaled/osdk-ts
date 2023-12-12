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
import type { DomainIngressConfiguration } from "../DomainIngressConfiguration.js";
import type { PatchDomainIngressConfigurationRequest } from "../PatchDomainIngressConfigurationRequest.js";

/**
 * Patches the ingress allowlists for a specific domain within an enrollment, and returns the updated ingress
 * configuration for that domain.
 *
 * Requires `control-panel:enrollment:edit-ingress-configuration` on the enrollment RID.
 *
 * Throws if the patch results in a number of allowed CIDRs surpassing the limit defined in
 * `EnrollmentIngressConfiguration#getMaxCidrsPerDomain`.
 */
export async function patchDomainIngressConfiguration(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  request: PatchDomainIngressConfigurationRequest,
): Promise<DomainIngressConfiguration> {
  return conjureFetch(
    ctx,
    `/ingress/enrollment/${enrollmentRid}/patch-domain-configuration`,
    "PUT",
    request,
  );
}
