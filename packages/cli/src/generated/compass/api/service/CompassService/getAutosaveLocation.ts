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
 * Returns the Resource representing the folder where autosave resources should be saved to, or empty if there is no autosave location available for the given resource.
 *
 * If projectCentricAutosaveEnabled is disabled, this is the ".auto-save" folder within the user's home folder. The folder will be created if it does not exist. If it has been trashed, it will be recreated. The autosave location will always exist, and thus the return value will not be empty.
 *
 * If projectCentricAutosaveEnabled is enabled, this endpoint return an autosave location that is dependent on the project of the passed in context rid.
 */
export async function getAutosaveLocation(
  ctx: ConjureContext,
  rid: string,
  decorations: Array<string>,
): Promise<DecoratedResource | undefined> {
  return conjureFetch(
    ctx,
    `/autosave?${new URLSearchParams({
      "rid": rid,
      "decoration": decorations.join(","),
    })}`,
    "GET",
  );
}
