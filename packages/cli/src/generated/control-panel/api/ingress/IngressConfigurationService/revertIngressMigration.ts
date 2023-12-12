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
import type { EnrollmentRid } from "../../EnrollmentRid.js";

/**
 * Resets the ingress configuration in the network services, in order for it to discard the changes that were
 * propagated from the Control Panel store and to fall back again to the configuration from the environment's
 * `security.yml` file.
 *
 * The Control Panel store will also be reset to what it was when the migration was started after calling
 * `startIngressMigration`.
 *
 * Requires `control-panel:environment:manage-ingress` on the Control Panel root RID.
 */
export async function revertIngressMigration(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/ingress/enrollment/${enrollmentRid}/revert-migration`,
    "PUT",
  );
}
