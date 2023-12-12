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

import type { BudgetV2 } from "./BudgetV2.js";
import type { Currency } from "./Currency.js";
import type { PricingRatesV2 } from "./PricingRatesV2.js";
import type { PricingValue } from "./PricingValue.js";
import type { Term } from "./Term.js";

/**
 * Pricing details for enrollments that use the usage based pricing. Examples include individual and full Foundry
 * onboardings.
 */
export interface UsageBasedPricing {
  currency: Currency;
  rates: PricingRatesV2;
  term: Term;
  budget: BudgetV2 | undefined;
  credit: PricingValue | undefined;
}
