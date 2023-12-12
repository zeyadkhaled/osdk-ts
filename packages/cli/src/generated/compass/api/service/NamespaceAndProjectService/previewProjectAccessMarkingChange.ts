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
import type { PreviewProjectAccessMarkingChangeRequest } from "../../project/PreviewProjectAccessMarkingChangeRequest.js";
import type { PreviewProjectAccessMarkingChangeResponse } from "../../project/PreviewProjectAccessMarkingChangeResponse.js";

/**
 * Returns an approximate preview of user access before and after the specified marking patches are applied.
 * The preview is approximate because discretionary access is not exhaustively calculated (e.g. role grants to
 * descendant resources of the project are not considered, out-of-band GK access grants such as
 * initial-node-overrides are not considered, etc.). Instead, discretionary access is estimated by retrieving
 * the users that are granted a role on the specified project, including the default role.
 *
 * Throws:
 * NotFound if specified project does not exist or the user does not have read access
 */
export async function previewProjectAccessMarkingChange(
  ctx: ConjureContext,
  projectRid: string,
  request: PreviewProjectAccessMarkingChangeRequest,
): Promise<PreviewProjectAccessMarkingChangeResponse> {
  return conjureFetch(
    ctx,
    `/hierarchy/v2/projects/${projectRid}/preview-project-access-marking-change`,
    "POST",
    request,
  );
}
