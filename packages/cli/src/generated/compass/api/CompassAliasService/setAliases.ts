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
 * For each ResourceIdentifier in aliasMap, the corresponding string value is set to be the alias of that resource.
 * None of the resources passed into the aliasMap can be hidden resources, nor can they be service projects or service project resources.
 *
 * Throws:
 * InsufficientPermissions if user does not have "compass:edit-alias" on each passed in resource
 * ForbiddenOperationOnHiddenResource if any of the resources passed in are hidden resources
 * ForbiddenOperationOnServiceProjectResource if any of the resources passed in are service projects or service project resources
 * ResourcesNotFoundException if resources passed in do not exist
 */
export async function setAliases(
  ctx: ConjureContext,
  aliasMap: Record<string, string>,
): Promise<void> {
  return conjureFetch(ctx, `/batch/aliases`, "POST", aliasMap);
}
