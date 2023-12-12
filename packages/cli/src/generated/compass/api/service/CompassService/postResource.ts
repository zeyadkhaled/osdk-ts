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
import type { PostResourceRequest } from "../../PostResourceRequest.js";

/**
 * Create or update a Resource. When creating a resource it must already exist in Gatekeeper under the given
 * parentId; when updating a resource the given parentId must match the existing parent RID.
 *
 * Throws:
 * BadRequestException if a resource with the same name already exists in the containing folder or if the Resource did not have the correct parent in Gatekeeper
 * NotFoundException if the resource associated with parentId does not exist in Compass
 * CannotChangeParentWithoutSettingAllowUpdatingParent if the resource already exists in Compass and the provided parent RID doesn't match the existing parent RID
 */
export async function postResource(
  ctx: ConjureContext,
  parentId: string | undefined,
  resource: PostResourceRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/resources?${new URLSearchParams({ "parentId": "" + parentId })}`,
    "POST",
    resource,
  );
}
