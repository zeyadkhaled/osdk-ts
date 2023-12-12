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
import type { UpdateCollectionChildrenRequest } from "../UpdateCollectionChildrenRequest.js";

/**
 * Update which collections the specified resources are a member of.
 * The specified resources cannot be hidden resources, nor can they be service projects or in service projects.
 *
 * Throws the following errors:
 * NotFound if the user references a collection which does not exist
 * InsufficientPermissions if the user tries to add or remove the resource from a collection they don't have permission to modify
 * ForbiddenOperationOnServiceProjectResource if the resource is a service project or a service project resource
 * ForbiddenOperationOnHiddenResource if the resource is a hidden resource
 * ServicesNamespaceOperationForbidden if any resource is the Services namespace
 */
export async function batchUpdateCollectionChildren(
  ctx: ConjureContext,
  updateCollectionChildrenRequest: UpdateCollectionChildrenRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/batch/collections/resources/update`,
    "POST",
    updateCollectionChildrenRequest,
  );
}
