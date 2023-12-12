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
import type { Tag } from "../Tag.js";

/**
 * Get information the specified Tags by id.
 * Any tags which do not exist or the user does not have permission to view will be absent from result.
 *
 * Returns a map from tag rid to the tag information.
 */
export async function getTags(
  ctx: ConjureContext,
  tagRids: Array<string>,
): Promise<Record<string, Tag>> {
  return conjureFetch(ctx, `/batch/tags`, "POST", tagRids);
}
