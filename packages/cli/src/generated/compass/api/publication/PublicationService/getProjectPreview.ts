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
 * Returns the project preview for the specified project, if one exists. An empty result is also returned
 * if the requesting user does not have compass:read-resource on the project preview RID or the
 * publications feature flag is not enabled.
 */
export async function getProjectPreview(
  ctx: ConjureContext,
  projectRid: string,
): Promise<ProjectPreview | undefined> {
  return conjureFetch(ctx, `/projects/${projectRid}/preview`, "GET");
}
