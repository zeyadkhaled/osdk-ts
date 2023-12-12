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
 * Returns enrollment-specific ingress configuration information, such as all allowed CIDRs and countries for
 * the enrollment's internet-addressable domains.
 *
 * If a domain has been added to an enrollment but has never had ingress rules configured, an appropriate
 * configuration object (with empty allowlists) will be returned for it.
 *
 * Requires `control-panel:enrollment:view-ingress-configuration` on the enrollment RID.
 */
export async function getEnrollmentIngressConfiguration(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
): Promise<EnrollmentIngressConfiguration> {
  return conjureFetch(ctx, `/ingress/enrollment/${enrollmentRid}`, "GET");
}
