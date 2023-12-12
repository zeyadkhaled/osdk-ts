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
import type { Domain } from "../Domain.js";

/**
 * Returns the declared state of all domains managed by Control Panel including the status of their current
 * state.
 *
 * Throws:
 * - ControlPanel:PermissionDenied if the user does not have `control-panel:environment:administer` on the
 * Control Panel root.
 * - Default:InvalidArgument if the domain migration status prohibits reading domains (see
 * {@link DomainMigrationStatus}).
 */
export async function getAll(ctx: ConjureContext): Promise<Array<Domain>> {
  return conjureFetch(ctx, `/domain`, "GET");
}
