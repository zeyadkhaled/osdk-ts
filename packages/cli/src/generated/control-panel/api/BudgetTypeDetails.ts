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

import type { FixedBudgetDetails } from "./FixedBudgetDetails.js";
import type { RecurringBudgetDetails } from "./RecurringBudgetDetails.js";
export interface BudgetTypeDetails_recurring {
  type: "recurring";
  recurring: RecurringBudgetDetails;
}

export interface BudgetTypeDetails_fixed {
  type: "fixed";
  fixed: FixedBudgetDetails;
}
export type BudgetTypeDetails =
  | BudgetTypeDetails_recurring
  | BudgetTypeDetails_fixed;
