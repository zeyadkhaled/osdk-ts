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
import type { IngressPatch } from "../IngressPatch.js";
import type { IngressPatchRid } from "../IngressPatchRid.js";

/**
 * Returns the ingress patch details for the given patch rids.
 *
 * Throws if there are more than 100 patches requested.
 *
 * Only patch RIDs on which the user has `control-panel:enrollment:view-ingress-configuration` will be returned.
 */
export async function getIngressPatches(
  ctx: ConjureContext,
  ingressPatchRids: Array<IngressPatchRid>,
): Promise<Record<IngressPatchRid, IngressPatch>> {
  return conjureFetch(ctx, `/ingress/patches`, "PUT", ingressPatchRids);
}
