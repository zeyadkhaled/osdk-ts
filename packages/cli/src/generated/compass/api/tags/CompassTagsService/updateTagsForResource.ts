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
import type { UpdateTagsForResourceRequest } from "../UpdateTagsForResourceRequest.js";

/**
 * Apply the specified changes in tag membership to the specified resource. Cannot update the tags of a
 * service project resource or of a hidden resource.
 *
 * Throws the following errors:
 * NotFound if the user references a Tag that does not exist
 * InsufficientPermissions if the user does not have permission to complete a tag membership change
 * ForbiddenOperationOnHiddenResource if resource passed in is a hidden resource
 * ForbiddenOperationOnServiceProjectResource if resource passed in is a service project or a service project resource
 *
 * Returns the tags the resource belongs to after the update is complete
 */
export async function updateTagsForResource(
  ctx: ConjureContext,
  rid: string,
  updateTagsForResourceRequest: UpdateTagsForResourceRequest,
): Promise<Array<string>> {
  return conjureFetch(
    ctx,
    `/tags/resources/${rid}`,
    "PUT",
    updateTagsForResourceRequest,
  );
}
