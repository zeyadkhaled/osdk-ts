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
import type { CompassShareLinkWithId } from "../CompassShareLinkWithId.js";

/**
 * If a share link already exists for this resource, this endpoint just returns it.
 * Otherwise, this endpoint creates a share link using the default link passed in.
 * The resource's rid must be the same as the rid in the default link.
 * The resource to share cannot be a hidden resource, nor can it be a service project or in a service project.
 *
 * Requires that the calling user can grant the role(s) specified by the share link.
 */
export async function getOrCreateLink(
  ctx: ConjureContext,
  resourceIdentifier: string,
  defaultLink: CompassShareLink,
): Promise<CompassShareLinkWithId> {
  return conjureFetch(
    ctx,
    `/shares/links/${resourceIdentifier}`,
    "POST",
    defaultLink,
  );
}
