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

/**
 * Saves an autosave resource to be a regular, non-autosave Compass resource. Does this in place if no destination
 * is specified, else moves to the specified destination and saves. If the destination is in a service project,
 * the AuthHeader must have compass:write-service-project.
 */
export async function saveAutosaveResource(
  ctx: ConjureContext,
  rid: string,
  destination: string | undefined,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/autosaves/save/${rid}?${new URLSearchParams({
      "destination": "" + destination,
    })}`,
    "POST",
  );
}
