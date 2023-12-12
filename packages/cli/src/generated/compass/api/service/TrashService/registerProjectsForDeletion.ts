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
 * An indicator that these projects will be deleted in the future. Calling this method does not do any actual deletion.
 * A best-effort is made to simulate the projects being deleted (the resources in the projects should act as if they don't
 * exist / can't be accessed).
 *
 * Limited to a batch size of 100 projects.
 *
 * compass:project-deletion is required on each projectRid to call this method.
 */
export async function registerProjectsForDeletion(
  ctx: ConjureContext,
  projectRids: Array<string>,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/trash/register-projects-for-deletion`,
    "POST",
    projectRids,
  );
}
