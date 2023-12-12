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
 * Gets a resource by absolute path. If the resource is found and is readable, it is returned; otherwise an empty Optional is returned.
 */
export async function getResourceByPath(
  ctx: ConjureContext,
  path: string | undefined,
  decorations: Array<string>,
  permissiveFolders: boolean | undefined,
  additionalOperations: Array<string>,
): Promise<DecoratedResource | undefined> {
  return conjureFetch(
    ctx,
    `/resources?${new URLSearchParams({
      "path": "" + path,
      "decoration": decorations.join(","),
      "permissiveFolders": "" + permissiveFolders,
      "additionalOperations": additionalOperations.join(","),
    })}`,
    "GET",
  );
}
