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
import type { UpdateProjectRequestV2 } from "../../request/UpdateProjectRequestV2.js";

/**
 * Same as NamespaceAndProjectService's updateProject endpoint, but only operates on service projects.
 */
export async function updateServiceProject(
  ctx: ConjureContext,
  rid: string,
  userBearerToken: string,
  request: UpdateProjectRequestV2,
): Promise<ProjectFolderV2> {
  return conjureFetch(
    ctx,
    `/hierarchy/v2/service-projects/${rid}`,
    "PUT",
    request,
  );
}
