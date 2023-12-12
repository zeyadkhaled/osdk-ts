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
import type { DecoratedResource } from "../../DecoratedResource.js";

/**
 * Get the resource (and whichever computed properties are specified) given several rids.
 *
 * Returns a map from ResourceIdentifier to corresponding resource. If a resource does not exist, or is invisible, an entry for its rid will not exist.
 */
export async function getResources(
  ctx: ConjureContext,
  decorations: Array<string>,
  includeOperations: boolean | undefined,
  additionalOperations: Array<string>,
  rids: Array<string>,
): Promise<Record<string, DecoratedResource>> {
  return conjureFetch(
    ctx,
    `/batch/resources?${new URLSearchParams({
      "decoration": decorations.join(","),
      "includeOperations": "" + includeOperations,
      "additionalOperations": additionalOperations.join(","),
    })}`,
    "POST",
    rids,
  );
}
