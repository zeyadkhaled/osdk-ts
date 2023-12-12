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
import type { Resource } from "../../Resource.js";

/**
 * Returns the parent of a given resource or Optional.absent() if there is no parent (for the root resource).
 *
 * Throws NotFoundException if the resource does not exist, if the resource is not visible, or if the resource's parent is not visible.
 */
export async function getParent(
  ctx: ConjureContext,
  rid: string,
): Promise<Resource | undefined> {
  return conjureFetch(ctx, `/resources/${rid}/parent`, "GET");
}
