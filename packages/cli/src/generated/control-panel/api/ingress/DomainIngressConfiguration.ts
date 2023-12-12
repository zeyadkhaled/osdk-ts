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

import type { AllowedCountry } from "./AllowedCountry.js";
import type { CidrGrouping } from "./CidrGrouping.js";

/**
 * Describes the ingress configuration applying for an enrollment's (base) domain.
 *
 * The `allowedCidrs` field is a list to provide consistent ordering guarantees to the FE. CIDRs must be unique
 * across the full configuration.
 *
 * Note that registered subdomains (see `getRegisteredSubdomains` in `EnrollmentSubdomainService`) are
 * automatically setup to track the ingress configuration of their base domain.
 */
export interface DomainIngressConfiguration {
  allowedCidrs: Array<CidrGrouping>;
  allowedCountries: Array<AllowedCountry>;
}
