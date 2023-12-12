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
import type { InternetDomainName } from "../../InternetDomainName.js";
import type { AllowedOrigin } from "../../networking/cors/AllowedOrigin.js";

/**
 * Gets all CORS configurations from the Network infrastructure layer, used for testing purposes.
 */
export async function getAllCorsConfigurationsFromNetworkInfra(
  ctx: ConjureContext,
): Promise<Record<InternetDomainName, Array<AllowedOrigin>>> {
  return conjureFetch(ctx, `/debug/cors/all`, "GET");
}
