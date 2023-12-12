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
import type { UpdateProjectPreviewRequest } from "../UpdateProjectPreviewRequest.js";

/**
 * Updates the project preview for the specified project.
 *
 * Throws:
 * - NotAuthorizedToDeclassify if the requesting user does not have gatekeeper:declassify-marking on any of
 * the project's markings that are not specified on the preview.
 * - InsufficientPermissions if the requesting user does not have
 * compass:write-resource on the project RID
 * - NotFound if the requesting user does not have compass:read-resource on the project RID or
 * if the project does not exist.
 * - ProjectPreviewDoesNotExist if no project preview exists for the project
 * - InvalidProjectPreviewConjunctiveMarkings if the specified conjunctive markings are not a subset of the
 * project's conjunctive markings.
 */
export async function updateProjectPreview(
  ctx: ConjureContext,
  projectRid: string,
  request: UpdateProjectPreviewRequest,
): Promise<void> {
  return conjureFetch(ctx, `/projects/${projectRid}/preview`, "PUT", request);
}
