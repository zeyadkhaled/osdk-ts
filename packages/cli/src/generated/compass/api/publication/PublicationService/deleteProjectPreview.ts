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
 * Deletes the project preview for the specified project. If the project has no project preview, the request
 * has no effect.
 *
 * Throws:
 * - InsufficientPermissions if the requesting user does not have
 * compass:write-resource on the project RID
 * - NotFound if the requesting user does not have compass:read-resource
 * on the project RID or if the project does not exist
 */
export async function deleteProjectPreview(
  ctx: ConjureContext,
  projectRid: string,
): Promise<void> {
  return conjureFetch(ctx, `/projects/${projectRid}/preview`, "DELETE");
}
