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
import type { ResourceRidsPage } from "../../ResourceRidsPage.js";

/**
 * Gets the list of all children rids in a given folder. The given folder cannot be the Compass root or a Compass namespace.
 */
export async function getAllChildrenRids(
  ctx: ConjureContext,
  rid: string,
  pageSize: string,
  pageToken: string | undefined,
): Promise<ResourceRidsPage> {
  return conjureFetch(
    ctx,
    `/folders/${rid}/all-children-rids?${new URLSearchParams({
      "pageSize": "" + pageSize,
      "pageToken": "" + pageToken,
    })}`,
    "GET",
  );
}
