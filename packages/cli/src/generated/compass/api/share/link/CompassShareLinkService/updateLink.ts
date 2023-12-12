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
import type { CompassShareLink } from "../CompassShareLink.js";

/**
 * Replaces the CompassShareLink associated with linkId with newLink.
 *
 * The share link associated with the linkId must have on the same resource rid
 * as the rid in the newLink.
 *
 * The resource specified in the newLink cannot be a hidden resource, nor can it be a service project or in a service project.
 *
 * Requires that the calling user can grant the role(s) specified by the share link.
 *
 * Throws the following errors:
 * CannotShareAutosaveResource if resource specified is an autosave resource
 * CannotShareHiddenResource if resource specified is a hidden resource
 * ForbiddenOperationOnServiceProjectResource if resource specified is a service project or a service
 * project resource
 * ForbiddenOperationOnHiddenResource if resource specified is a hidden resource
 * NotFoundException if linkId does not exist.
 */
export async function updateLink(
  ctx: ConjureContext,
  linkId: string,
  newLink: CompassShareLink,
): Promise<void> {
  return conjureFetch(ctx, `/shares/links/${linkId}`, "PUT", newLink);
}
