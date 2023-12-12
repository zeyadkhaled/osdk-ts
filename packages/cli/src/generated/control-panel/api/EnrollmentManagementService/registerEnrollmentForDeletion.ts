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
 * Registers an enrollment for deletion. Some further mutations such as modifying the organizations that are part
 * of that enrollment are disallowed when an enrollment is registered for deletion.
 *
 * This endpoint is meant to be used by the Deletion Coordinator service user only, when a deletion context is
 * created with an enrollment seed.
 *
 * Requires `control-panel:manage-enrollment-deletion` on Control Panel's root node.
 */
export async function registerEnrollmentForDeletion(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  deletionContextRid: string,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/admin/enrollment/${enrollmentRid}/register-for-deletion?${new URLSearchParams(
      { "deletionContextRid": deletionContextRid },
    )}`,
    "PUT",
  );
}
