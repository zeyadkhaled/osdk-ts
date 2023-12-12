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
import type { IsEmailAvailableResult } from "../IsEmailAvailableResult.js";
import type { UserDirectoryRid } from "../UserDirectoryRid.js";

/**
 * Returns whether the specified email address is available for use. See `IsEmailAvailableResult`.
 *
 * Throws:
 * - ControlPanel:PermissionDenied if the user does not have `control-panel:user-directory:edit` on the
 * user directory node.
 */
export async function isEmailAvailable(
  ctx: ConjureContext,
  userDirectoryRid: UserDirectoryRid,
  email: string,
): Promise<IsEmailAvailableResult> {
  return conjureFetch(
    ctx,
    `/user-directory/${userDirectoryRid}/is-email-available`,
    "PUT",
    email,
  );
}
