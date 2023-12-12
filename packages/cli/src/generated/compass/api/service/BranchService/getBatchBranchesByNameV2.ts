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
import type { GetBatchBranchesByNameRequestV2 } from "../../branches/GetBatchBranchesByNameRequestV2.js";
import type { GetBatchBranchesByNameResponseV2 } from "../../branches/GetBatchBranchesByNameResponseV2.js";

/**
 * Throws if the number requested resources and branch names exceed a limit of 1000.
 */
export async function getBatchBranchesByNameV2(
  ctx: ConjureContext,
  request: GetBatchBranchesByNameRequestV2,
): Promise<GetBatchBranchesByNameResponseV2> {
  return conjureFetch(
    ctx,
    `/resources/batch/branches-by-name/v2`,
    "POST",
    request,
  );
}
