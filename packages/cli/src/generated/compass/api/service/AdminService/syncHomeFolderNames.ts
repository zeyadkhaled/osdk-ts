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

/**
 * For each of the provided users, update the user's home folder name to the user's current username in Multipass.
 *
 * Requires the compass:migrate operation on the Compass admin node,
 * as well as user administration permission on the organization rid for all requested users' orgs.
 *
 * Returns a map of user ID to home folder RID, for each of the requested users with a home folder that has had its name updated.
 */
export async function syncHomeFolderNames(
  ctx: ConjureContext,
  users: Array<string>,
): Promise<Record<string, string>> {
  return conjureFetch(ctx, `/admin/sync/home-folders/names`, "POST", users);
}
