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
import type { ProjectFolder } from "../../project/ProjectFolder.js";

/**
 * Gets projects for the specified RIDs.
 *
 * Returns a map from rid to ProjectFolder. If an rid does not correspond to a project, it will not show up in the map.
 */
export async function getProjects(
  ctx: ConjureContext,
  rids: Array<string>,
): Promise<Record<string, ProjectFolder>> {
  return conjureFetch(ctx, `/batch/projects-by-rids`, "POST", rids);
}
