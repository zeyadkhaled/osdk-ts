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
import type { BatchGetChildrenByNameResponse } from "../../BatchGetChildrenByNameResponse.js";
import type { ChildNameAndParentRid } from "../../ChildNameAndParentRid.js";

/**
 * Returns the resources with the specified name and parent pairs.
 *
 * Throws a TooManyResourcesRequested if the number of resources to fetch exceeds the maximum allowed of 2000.
 */
export async function batchGetChildrenByName(
  ctx: ConjureContext,
  childNamesAndParents: Array<ChildNameAndParentRid>,
  decorations: Array<string>,
  includeOperations: boolean,
  additionalOperations: Array<string>,
): Promise<BatchGetChildrenByNameResponse> {
  return conjureFetch(
    ctx,
    `/batch/folders/children-by-name?${new URLSearchParams({
      "decoration": decorations.join(","),
      "includeOperations": "" + includeOperations,
      "additionalOperations": additionalOperations.join(","),
    })}`,
    "POST",
    childNamesAndParents,
  );
}
