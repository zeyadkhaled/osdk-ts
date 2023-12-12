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
import type { ProjectFolderV2 } from "../../project/ProjectFolderV2.js";

/**
 * Gets projects for the specified RIDs.
 *
 * Returns a mapping from rid to ProjectFolderV2.
 * If an input rid does not correspond to a project, it will not show up in the map.
 *
 * Throws TooManyProjectssRequested if too many projects are requested in one batch.
 */
export async function getProjects(
  ctx: ConjureContext,
  rids: Array<string>,
): Promise<Record<string, ProjectFolderV2>> {
  return conjureFetch(ctx, `/hierarchy/v2/batch/projects`, "PUT", rids);
}
