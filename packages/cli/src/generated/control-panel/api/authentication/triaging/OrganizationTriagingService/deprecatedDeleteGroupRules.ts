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
import type { EnrollmentRid } from "../../../EnrollmentRid.js";
import type { Realm } from "../../../Realm.js";

/**
 * Deletes all the organization triaging group rules for a given realm.
 *
 * Requires `control-panel:customer:edit-org-triaging-rules` on the enrollment RID.
 *
 * The realm must belong to the enrollment.
 */
export async function deprecatedDeleteGroupRules(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  realm: Realm,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/organization-triaging/enrollments/${enrollmentRid}/realms/${realm}/groups`,
    "DELETE",
  );
}
