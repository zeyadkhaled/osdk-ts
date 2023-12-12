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
import type { ApplyPamsRequestTaskRid } from "../../../pams/ApplyPamsRequestTaskRid.js";
import type { UpdateApplyPamsRequestRequest } from "../../../pams/UpdateApplyPamsRequestRequest.js";

/**
 * Updates an existing request.
 *
 * Throws:
 * - NotFound if the task doest not exist
 * - InsufficientPermissions if the user does not have "compass:edit-project" on the project
 * - ProjectAccessMarkingsAlreadyAppliedToProject if all markings are already PAMs on the project
 */
export async function updateApplyPamsRequest(
  ctx: ConjureContext,
  taskRid: ApplyPamsRequestTaskRid,
  request: UpdateApplyPamsRequestRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/projects/apply-pam-requests/${taskRid}`,
    "PUT",
    request,
  );
}
