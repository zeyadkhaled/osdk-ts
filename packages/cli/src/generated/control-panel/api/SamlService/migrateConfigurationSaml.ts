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
import type { MigrateConfigurationSamlRequest } from "../MigrateConfigurationSamlRequest.js";
import type { MigrateConfigurationSamlResponse } from "../MigrateConfigurationSamlResponse.js";

/**
 * Migrates the SAML collector associated with the given collectorId and its corresponding provider from
 * configuration to the store. If migrating a collector without a collectorId, use the zero UUID, i.e.
 * `00000000-0000-0000-0000-000000000000` as the value for the collectorId field in the request.
 *
 * Requires `control-panel:saml:migrate` on the enrollment RID that the SAML is being migrated to.
 */
export async function migrateConfigurationSaml(
  ctx: ConjureContext,
  request: MigrateConfigurationSamlRequest,
): Promise<MigrateConfigurationSamlResponse> {
  return conjureFetch(ctx, `/saml/migrate`, "PUT", request);
}
