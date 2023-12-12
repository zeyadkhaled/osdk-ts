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
import type { InternetDomainName } from "../../../InternetDomainName.js";

/**
 * Migrates an existing domain (e.g. known to Cloud Infra API) that is not managed by Control Panel (e.g. managed
 * by rubix-central) to be managed by Control Panel. The migration is processed asynchronously and success or
 * failure can be determined via inspecting event or service logs. This endpoint is intended to be used for
 * one-off migrations only (e.g. if a domain was added to rubix-central after the domain migration to Control
 * Panel completed). If the specified domain is already managed by Control Panel, this is a noop. In order for a
 * domain to be migrated, it must exist and be indicated as managed in rubix-central with a read-write migration
 * status (e.g. see https://github.palantir.build/rubix/rubix-central/pull/86176/files#diff-9e316c2ba18c4db7d18a7371f488aeda3f89f817470915dbc4bda3b11cce9239R61-R74).
 * Otherwise, this will be a no-op.
 */
export async function migrateDomain(
  ctx: ConjureContext,
  name: InternetDomainName,
): Promise<void> {
  return conjureFetch(ctx, `/domain/${name}/migrate`, "PUT");
}
