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
import type { GetWorkshopModulesWithMetricsRequest } from "../GetWorkshopModulesWithMetricsRequest.js";
import type { GetWorkshopModulesWithMetricsResponse } from "../GetWorkshopModulesWithMetricsResponse.js";

/**
 * Retrieves a list of all workshop modules in a set of organizations that the user has access to see user
 * activity metrics on.
 */
export async function getWorkshopModulesWithMetrics(
  ctx: ConjureContext,
  request: GetWorkshopModulesWithMetricsRequest,
): Promise<GetWorkshopModulesWithMetricsResponse> {
  return conjureFetch(
    ctx,
    `/user-activity-metrics/workshop/workshop-modules`,
    "PUT",
    request,
  );
}
