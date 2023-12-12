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
 * Creates the folders identified by the path if they do not exist already. If folders are being created, the last
 * existing resource in the path specified cannot be a service project or a service project resource.
 *
 * Both leading and trailing slashes are optional in the path.
 *
 * Returns the deepest folder in the path.
 */
export async function createPath(
  ctx: ConjureContext,
  path: string,
): Promise<Resource> {
  return conjureFetch(
    ctx,
    `/paths?${new URLSearchParams({ "path": path })}`,
    "PUT",
  );
}
