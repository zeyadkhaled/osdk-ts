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
import type { ProjectPreview } from "../ProjectPreview.js";

/**
 * Returns the project previews for the specified project rids, keyed by project rid.
 *
 * If the publications feature flag is not enabled, no project previews are returned.
 *
 * RIDs specified in the request that do not correspond to existing projects, correspond to projects without
 * project previews, or projects with project previews for which the requesting user does not have access are
 * omitted from the result.
 *
 * Throws:
 * - TooManyResourcesRequested if more than 50 RIDs are requested.
 */
export async function batchGetProjectPreviews(
  ctx: ConjureContext,
  projectRids: Array<string>,
): Promise<Record<string, ProjectPreview>> {
  return conjureFetch(ctx, `/projects/previews/batch-get`, "POST", projectRids);
}
