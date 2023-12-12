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
import type { IngressPatchRid } from "../IngressPatchRid.js";
import type { UpdateIngressPatchRequest } from "../UpdateIngressPatchRequest.js";
import type { UpdateIngressPatchResponse } from "../UpdateIngressPatchResponse.js";

/**
 * Updates the ingress patch identified by the given patch RID. It must be a pending patch, that is not yet
 * applied.
 *
 * Requires `control-panel:enrollment:edit-ingress-configuration` on the patch RID.
 *
 * Throws if the patch is invalid from the Control Panel perspective, for instance would result in breaching
 * the limit described in `EnrollmentIngressConfiguration#getMaxCidrsPerDomain`.
 */
export async function updateIngressPatch(
  ctx: ConjureContext,
  patchRid: IngressPatchRid,
  request: UpdateIngressPatchRequest,
): Promise<UpdateIngressPatchResponse> {
  return conjureFetch(ctx, `/ingress/patch/${patchRid}`, "PUT", request);
}
