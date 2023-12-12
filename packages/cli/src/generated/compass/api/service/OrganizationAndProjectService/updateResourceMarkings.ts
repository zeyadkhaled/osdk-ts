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
import type { UpdateResourceMarkingsRequest } from "../../request/UpdateResourceMarkingsRequest.js";

/**
 * Updates the non-organization markings on a resource. The resource cannot be a hidden resource.
 *
 * Throws the following errors:
 * InsufficientPermissions if the user does not have "compass:apply-markings" on the resource
 * AutosaveResourceOperationForbidden if resource is an autosave resource
 * ForbiddenOperationOnHiddenResource if resource is a hidden resource
 * MarkingNotFound if the requested marking does not exist
 * InvalidMarking if the requested marking is a Multipass organization marking. Organization markings may only be
 * applied to projects, tag categories, and collections using the respective update endpoints. To update markings on
 * Compass namespaces, use NamespaceAndProjectService's updateNamespace endpoint.
 */
export async function updateResourceMarkings(
  ctx: ConjureContext,
  rid: string,
  userBearerToken: string | undefined,
  request: UpdateResourceMarkingsRequest,
): Promise<void> {
  return conjureFetch(ctx, `/markings/${rid}`, "POST", request);
}
