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
 * Returns all resources that are part of the path String. For example,
 * '/' will return the root folder;
 * '/Users' will return the root folder and the Users folder; and
 * /Users/foo' will return the root folder, the Users folder, and foo's home folder.
 *
 * Both leading and trailing slashes are optional in the path.
 *
 * Throws NotFoundException if any of the components in the path does not exist or is not visible.
 */
export async function resolvePath(
  ctx: ConjureContext,
  path: string,
): Promise<Array<Resource>> {
  return conjureFetch(
    ctx,
    `/paths?${new URLSearchParams({ "path": path })}`,
    "GET",
  );
}
