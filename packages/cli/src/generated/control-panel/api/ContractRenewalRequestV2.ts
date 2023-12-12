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

import type { ClickwrapGroupKey } from "./ClickwrapGroupKey.js";
import type { ClickwrapSignerId } from "./ClickwrapSignerId.js";
import type { ContractRenewalOnboardingDetails } from "./ContractRenewalOnboardingDetails.js";
import type { ContractRenewalRequestRid } from "./ContractRenewalRequestRid.js";
import type { CustomerOrganizationName } from "./CustomerOrganizationName.js";
import type { EnrollmentRid } from "./EnrollmentRid.js";
import type { PaymentOption } from "./PaymentOption.js";
import type { Region } from "./Region.js";

/**
 * A command to renew an enrollment's term.
 */
export interface ContractRenewalRequestV2 {
  contractRenewalRequestId: ContractRenewalRequestRid;
  enrollmentRid: EnrollmentRid;
  clickwrapSignerId: ClickwrapSignerId;
  clickwrapGroupKeys: Array<ClickwrapGroupKey>;
  createdAt: string;
  contactEmail: string;
  domain: string;
  customerOrganizationName: CustomerOrganizationName;
  region: Region;
  paymentOption: PaymentOption | undefined;
  onboardingDetails: ContractRenewalOnboardingDetails;
}
