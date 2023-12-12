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
import type { EnrollmentRid } from "../EnrollmentRid.js";

/**
 * Unregisters an enrollment for deletion. This undoes the effects of a previous call to
 * `registerEnrollmentForDeletion`.
 *
 * This endpoint is meant to be used by the Deletion Coordinator service user only, when a deletion context
 * containing that enrollment is cancelled and reverted.
 *
 * Requires the `control-panel:manage-enrollment-deletion` on Control Panel's root node.
 */
export async function unregisterEnrollmentForDeletion(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/admin/enrollment/${enrollmentRid}/unregister-for-deletion`,
    "PUT",
  );
}
