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
import type { CheckNamesRequest } from "../../request/CheckNamesRequest.js";

/**
 * Batch version of checkName.
 *
 * Returns a map from name to whether it is valid.
 */
export async function checkNames(
  ctx: ConjureContext,
  parentRid: string,
  request: CheckNamesRequest,
): Promise<Record<string, boolean>> {
  return conjureFetch(
    ctx,
    `/resources/${parentRid}/checkNames`,
    "POST",
    request,
  );
}
