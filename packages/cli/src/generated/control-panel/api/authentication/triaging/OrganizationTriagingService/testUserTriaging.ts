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
import type { TestUserTriagingRequest } from "../TestUserTriagingRequest.js";
import type { TestUserTriagingResponse } from "../TestUserTriagingResponse.js";

/**
 * Returns which of the organization triaging rules among the provided user rules, a `TestUser` would match.
 *
 * Multiple test users can be provided in batch to the endpoint. A `TestUser` is defined either through a
 * Multipass User ID, or through a set of attributes, (external) group names, and (internal) group IDs that a
 * user might have after logging in.
 *
 * Throws a `USERS_NOT_FOUND_IN_REALM` error if the any of the test users are specified through a Multipass User
 * ID, but cannot be found in the provided `realm`.
 *
 * Requires `control-panel:customer:view-org-triaging-rules` on the enrollment RID.
 *
 * The realm must belong to the enrollment.
 *
 * If any of the test users are `userId`s, also requires `multipass:administer-user` on each user's organization
 * root node.
 */
export async function testUserTriaging(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  realm: Realm,
  request: TestUserTriagingRequest,
): Promise<TestUserTriagingResponse> {
  return conjureFetch(
    ctx,
    `/organization-triaging/enrollments/${enrollmentRid}/realms/${realm}/users/test`,
    "PUT",
    request,
  );
}
