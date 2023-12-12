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
import type { PatchDescriptionRequest } from "../../request/PatchDescriptionRequest.js";

/**
 * Updates the description of the given resources using patch semantics, i.e. the description will be updated if it is provided
 * (and similarly for the long description).
 *
 * Throws:
 * NotFound if any resource does not exist
 * ForbiddenOperationOnHiddenResource if any resource is hidden
 * ServicesNamespaceOperationForbidden if any resource is the Services namespace
 */
export async function patchDescriptions(
  ctx: ConjureContext,
  request: PatchDescriptionRequest,
): Promise<void> {
  return conjureFetch(ctx, `/batch/descriptions`, "POST", request);
}
