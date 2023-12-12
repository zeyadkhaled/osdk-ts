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
import type { TimestampedResourceIdentifier } from "../../TimestampedResourceIdentifier.js";

/**
 * Same as `getTimestampedFavorites`, except this returns favorites stored in Compass, and does not proxy to the
 * People service.
 */
export async function getPremigrationFavorites(
  ctx: ConjureContext,
): Promise<Array<TimestampedResourceIdentifier>> {
  return conjureFetch(ctx, `/premigration-favorites`, "GET");
}
