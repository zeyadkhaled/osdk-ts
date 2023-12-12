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
 * Touches a single resource and marks it as recently viewed for a user. If it's
 * already in the user's list of recently viewed resources, it will be updated so
 * that it appears at the top of the recently viewed list. Resource can not be a service project or a
 * service project resource.
 */
export async function markResourceAsViewed(
  ctx: ConjureContext,
  rid: string,
): Promise<void> {
  return conjureFetch(ctx, `/user-history/recently-viewed/${rid}`, "POST");
}
