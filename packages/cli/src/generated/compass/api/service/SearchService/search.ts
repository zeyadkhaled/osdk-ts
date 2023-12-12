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
import type { SearchQuery } from "../../../search/SearchQuery.js";
import type { SearchResult } from "../../../search/SearchResult.js";

/**
 * Searches for a list of resources.
 */
export async function search(
  ctx: ConjureContext,
  decorations: Array<string>,
  limit: string,
  includeOperations: boolean | undefined,
  additionalOperations: Array<string>,
  query: SearchQuery,
): Promise<Array<SearchResult>> {
  return conjureFetch(
    ctx,
    `/search?${new URLSearchParams({
      "decoration": decorations.join(","),
      "limit": "" + limit,
      "includeOperations": "" + includeOperations,
      "additionalOperations": additionalOperations.join(","),
    })}`,
    "POST",
    query,
  );
}
