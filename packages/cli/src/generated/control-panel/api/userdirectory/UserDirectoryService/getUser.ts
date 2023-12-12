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
import type { User } from "../User.js";
import type { UserDirectoryUserRid } from "../UserDirectoryUserRid.js";

/**
 * Returns the specified user in the user directory, if it exists in declared user state.
 *
 * Throws:
 * - ControlPanel:PermissionDenied if the user does not have
 * `control-panel:user-directory-user:view` on the user directory user node.
 */
export async function getUser(
  ctx: ConjureContext,
  userDirectoryUserRid: UserDirectoryUserRid,
): Promise<User | undefined> {
  return conjureFetch(
    ctx,
    `/user-directory/user/${userDirectoryUserRid}`,
    "GET",
  );
}
