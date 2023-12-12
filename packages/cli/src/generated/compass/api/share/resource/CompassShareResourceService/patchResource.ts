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
import type { StatementPatch } from "../../../StatementPatch.js";

/**
 * Modifies the policy on the resource with the corresponding patches.
 * The resource passed in cannot be a hidden resource, nor can it be a service project or in a service project.
 *
 * Requires `compass:edit` permission on the resource.
 */
export async function patchResource(
  ctx: ConjureContext,
  resourceIdentifier: string,
  statementPatches: Array<StatementPatch>,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/shares/resource/${resourceIdentifier}`,
    "POST",
    statementPatches,
  );
}
