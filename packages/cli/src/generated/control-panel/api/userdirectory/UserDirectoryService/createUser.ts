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
import type { CreateUserRequest } from "../CreateUserRequest.js";
import type { UserDirectoryRid } from "../UserDirectoryRid.js";
import type { UserDirectoryUserRid } from "../UserDirectoryUserRid.js";

/**
 * Declares a new user to be created in the user directory. Returns the new user's rid.
 *
 * The user will be asynchronously preregistered in Multipass and created in the specified user directory
 * (see `getUser` for status updates). Thus creation in Multipass and the user directory may be
 * temporarily delayed.
 *
 * Throws:
 * - ControlPanel:PermissionDenied if the user does not have `control-panel:user-directory:edit` on the
 * user directory node.
 * - Default:InvalidArgument if the specified email is not available (see `isEmailAvailable`)
 * - Default:InvalidArgument if the specified phone is not available (see `isPhoneAvailable`)
 * - Default:InvalidArgument if the specified user directory's status is not `UserDirectoryStatus.UP_TO_DATE`
 */
export async function createUser(
  ctx: ConjureContext,
  userDirectoryRid: UserDirectoryRid,
  request: CreateUserRequest,
): Promise<UserDirectoryUserRid> {
  return conjureFetch(
    ctx,
    `/user-directory/${userDirectoryRid}/user`,
    "POST",
    request,
  );
}
