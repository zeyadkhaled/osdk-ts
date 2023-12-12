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
import type { DecoratedResourcesPage } from "../../DecoratedResourcesPage.js";

/**
 * Gets the list of (non-trashed, non-autosave) children in a given folder.
 *
 * If Page.getNextPageToken() is defined, it indicates the starting position of a
 * subsequent request. Otherwise, it indicates the end of the stream.
 */
export async function getChildren(
  ctx: ConjureContext,
  rid: string,
  limit: string | undefined,
  filter: Array<string>,
  sort: string | undefined,
  pageToken: string | undefined,
  decorations: Array<string>,
  permissiveFolders: boolean | undefined,
  includeOperations: boolean | undefined,
  additionalOperations: Array<string>,
): Promise<DecoratedResourcesPage> {
  return conjureFetch(
    ctx,
    `/folders/${rid}/children?${new URLSearchParams({
      "limit": "" + limit,
      "filter": filter.join(","),
      "sort": "" + sort,
      "pageToken": "" + pageToken,
      "decoration": decorations.join(","),
      "permissiveFolders": "" + permissiveFolders,
      "includeOperations": "" + includeOperations,
      "additionalOperations": additionalOperations.join(","),
    })}`,
    "GET",
  );
}
