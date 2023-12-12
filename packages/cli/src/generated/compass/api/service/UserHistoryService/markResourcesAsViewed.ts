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
 * Updates the user's most recently viewed list with all of the rids given, either
 * updating the list so that the rids appear at the top of the recently viewed list,
 * or adds the rids into the list. Resources passed in cannot be service projects or service project resources.
 */
export async function markResourcesAsViewed(
  ctx: ConjureContext,
  rids: Array<string>,
): Promise<void> {
  return conjureFetch(ctx, `/user-history/batch/recently-viewed`, "POST", rids);
}
