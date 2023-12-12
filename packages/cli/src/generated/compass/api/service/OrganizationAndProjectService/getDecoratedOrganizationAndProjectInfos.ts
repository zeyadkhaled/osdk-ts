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
import type { OrganizationAndProjectInfo } from "../../project/OrganizationAndProjectInfo.js";

/**
 * Returns a map of resource rid to namespace and project information.
 *
 * The input resource does not need to be a Compass resource. If not, the namespace and project that is a
 * Gatekeeper ancestor of the resource will be returned. (There should never be more than one namespace or
 * project ancestor, but if there are, the closest ancestor will be returned.)
 *
 * A resource will be omitted from the return value if no namespace or project contains the given resource;
 * or the namespaces or project has Gatekeeper statements that Compass cannot parse; or the user does not
 * have "gatekeeper:view-resource" or "compass:read-resource" permissions to the resource, namespace, or project.
 *
 * Permanently deleted resources may be included in the result, with the namespace and project that contained
 * the resource when it was deleted.
 */
export async function getDecoratedOrganizationAndProjectInfos(
  ctx: ConjureContext,
  request: Array<string>,
  decorations: Array<string>,
  additionalOperations: Array<string>,
): Promise<Record<string, OrganizationAndProjectInfo>> {
  return conjureFetch(
    ctx,
    `/batch/hierarchy/projects/decorated?${new URLSearchParams({
      "decoration": decorations.join(","),
      "additionalOperations": additionalOperations.join(","),
    })}`,
    "POST",
    request,
  );
}
