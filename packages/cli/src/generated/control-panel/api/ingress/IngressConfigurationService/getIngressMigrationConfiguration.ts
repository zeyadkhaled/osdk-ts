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
import type { IngressMigrationConfiguration } from "../IngressMigrationConfiguration.js";

/**
 * Returns the migration configuration that will be applied when ingress is migrated from `security.yml` to
 * Control Panel for any enrollment on the environment. This is based on the data from Network API's
 * `getFallbackConfig` endpoint.
 *
 * This API is provided for debugging purposes.
 *
 * Requires `control-panel:environment:manage-ingress` on the Control Panel root RID.
 */
export async function getIngressMigrationConfiguration(
  ctx: ConjureContext,
): Promise<IngressMigrationConfiguration> {
  return conjureFetch(ctx, `/ingress/migration-configuration`, "GET");
}
