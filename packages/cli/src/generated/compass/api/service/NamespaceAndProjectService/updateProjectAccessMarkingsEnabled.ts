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
import type { UpdateProjectAccessMarkingsEnabledRequest } from "../../project/UpdateProjectAccessMarkingsEnabledRequest.js";

/**
 * Updates whether project access markings are enabled on the specified project. It can only be used to disable
 * project access markings.
 *
 * When disabling Project Access Markings, the authorized markings will be converted to a ALLOW Project Marking
 * Constraint, so there will be no change to the markings that can be used in the project. Note that this is not
 * symmetric with enabling them.
 *
 * Throws:
 * - NotFound if specified project does not exist or the user does not have read access
 * - NotProject if specified rid is not an project rid
 * - InsufficientPermissions if user does not have compass:edit-project on the specified project or if the user
 * cannot see all required project access markings.
 * - CannotEnableProjectAccessMarkingsOnProject if enabling project access markings.
 */
export async function updateProjectAccessMarkingsEnabled(
  ctx: ConjureContext,
  projectRid: string,
  request: UpdateProjectAccessMarkingsEnabledRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/hierarchy/v2/projects/${projectRid}/project-access-markings-enabled`,
    "POST",
    request,
  );
}
