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
import type { PlatformUsageRequest } from "../PlatformUsageRequest.js";
import type { PlatformUsageResponse } from "../PlatformUsageResponse.js";

/**
 * Returns a bucketed count of users using Foundry during the given time within a given set of organizations.
 */
export async function getPlatformUsagePerOrganization(
  ctx: ConjureContext,
  platformUsageRequest: PlatformUsageRequest,
): Promise<PlatformUsageResponse> {
  return conjureFetch(
    ctx,
    `/user-activity-metrics/platform/usage-per-organization`,
    "PUT",
    platformUsageRequest,
  );
}
