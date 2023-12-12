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
 * Returns the Resource representing the user's home folder or project, optionally creating one if it does not
 * exist. The home project is created in the filesystem returned for the user by Control Panel -- if none is
 * found, then the global default filesystem (if present) is used. The home project always receives the default
 * project RoleSet.
 */
export async function getHomeFolder(
  ctx: ConjureContext,
  decorations: Array<string>,
  additionalOperations: Array<string>,
): Promise<DecoratedResource> {
  return conjureFetch(
    ctx,
    `/folders/home?${new URLSearchParams({
      "decoration": decorations.join(","),
      "additionalOperations": additionalOperations.join(","),
    })}`,
    "GET",
  );
}
