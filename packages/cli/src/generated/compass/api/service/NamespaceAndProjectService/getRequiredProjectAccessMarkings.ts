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
import type { GetRequiredProjectAccessMarkingsResponse } from "../../project/GetRequiredProjectAccessMarkingsResponse.js";

/**
 * Returns the set of marking IDs that should be set as project access markings on the specified project in
 * order to align user access to the project with markings that are applied to resources within the project.
 * Resources within a project includes the project resource, its descendants, and project imports. For each
 * resource, directly applied markings, propagated markings, and markings on the resource's default branch, if
 * one exists, will be included. Only conjunctive markings are returned with the exception of the project
 * resource, which will have disjunctive markings for it returned as well (e.g. to account for Org markings).
 *
 * Note that this endpoint does not return an exhaustive set of all markings used on resources in the project.
 * For example, markings in transactions on non-default branches are not returned.
 *
 * Throws:
 * - NotFound if specified project does not exist or the user does not have read access
 * - InsufficientPermissions if user does not have permission to view project imports for the specified project
 * or if the user cannot see all required project access markings.
 * - NotProject if specified rid is not an project rid
 */
export async function getRequiredProjectAccessMarkings(
  ctx: ConjureContext,
  projectRid: string,
): Promise<GetRequiredProjectAccessMarkingsResponse> {
  return conjureFetch(
    ctx,
    `/hierarchy/v2/projects/${projectRid}/required-project-access-markings`,
    "GET",
  );
}
