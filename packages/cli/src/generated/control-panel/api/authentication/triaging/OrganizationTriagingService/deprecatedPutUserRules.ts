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
import type { UserRules } from "../UserRules.js";

/**
 * Updates the organization triaging user rules for a given realm. If a `UserRules` already exists for the realm,
 * this operation will fully overwrite it.
 *
 * To add rules for a realm, provide a `UserRules` object with additional rules in the `rules` field.
 *
 * To delete rules for a realm, provide a `UserRules` object with rules removed from the `rules` field.
 *
 * Requires `control-panel:customer:edit-org-triaging-rules` on the enrollment RID.
 *
 * The realm and organizations for which the rules apply must belong to the enrollment.
 */
export async function deprecatedPutUserRules(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  realm: Realm,
  userRules: UserRules,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/organization-triaging/enrollments/${enrollmentRid}/realms/${realm}/users`,
    "PUT",
    userRules,
  );
}
