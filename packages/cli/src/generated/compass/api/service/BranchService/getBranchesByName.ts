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
import type { GetBranchesByNameResponse } from "../../branches/GetBranchesByNameResponse.js";

/**
 * Finds and returns branches by name for a given resource. Includes any markings on these branches. Throws if the
 * number of branch names requested exceeds 2000.
 */
export async function getBranchesByName(
  ctx: ConjureContext,
  rid: string,
  names: Array<string>,
): Promise<GetBranchesByNameResponse> {
  return conjureFetch(ctx, `/resources/${rid}/branches-by-name`, "POST", names);
}
