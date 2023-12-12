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

import type { Attribution } from "../../Attribution.js";
import type { EnrollmentRid } from "../../EnrollmentRid.js";
import type { InternetDomainName } from "../../InternetDomainName.js";
import type { SubdomainRegistrationReason } from "./SubdomainRegistrationReason.js";

/**
 * Describes a subdomain registration task created in Approvals, that can be in pending, closed, or approved
 * state. To get the actual status of a request, use Approval APIs.
 */
export interface SubdomainRegistrationRequest {
  baseDomain: InternetDomainName;
  subdomain: InternetDomainName;
  enrollmentRid: EnrollmentRid;
  requestedAt: Attribution;
  reason: SubdomainRegistrationReason;
}
