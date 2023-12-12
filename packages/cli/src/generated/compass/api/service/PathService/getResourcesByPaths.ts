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
 * Gets a resource for each absolute path.
 *
 * Returns a map mapping the path to the decorated resource. If the path could not be resolved to an entry,
 * there will be no entry for it in the map.
 */
export async function getResourcesByPaths(
  ctx: ConjureContext,
  decorations: Array<string>,
  paths: Array<string>,
  includeOperations: boolean | undefined,
  additionalOperations: Array<string>,
): Promise<Record<string, DecoratedResource>> {
  return conjureFetch(
    ctx,
    `/batch/resources-by-paths?${new URLSearchParams({
      "decoration": decorations.join(","),
      "includeOperations": "" + includeOperations,
      "additionalOperations": additionalOperations.join(","),
    })}`,
    "POST",
    paths,
  );
}
