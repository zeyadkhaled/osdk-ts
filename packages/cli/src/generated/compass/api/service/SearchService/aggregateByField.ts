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
import type { AggregationQuery } from "../../../search/AggregationQuery.js";
import type { AggregationResult } from "../../../search/AggregationResult.js";

/**
 * Runs the aggregation query and returns the aggregation results.
 */
export async function aggregateByField(
  ctx: ConjureContext,
  query: AggregationQuery,
): Promise<Array<AggregationResult>> {
  return conjureFetch(ctx, `/aggregate-field`, "POST", query);
}
