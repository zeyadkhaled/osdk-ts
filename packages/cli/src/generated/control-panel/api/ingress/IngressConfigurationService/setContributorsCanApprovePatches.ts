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
import type { EnrollmentRid } from "../../EnrollmentRid.js";

/**
 * Sets whether the ingress patch contributors, which include the patch creator and the last editor, can approve
 * a patch. If this flag is `true`, a single security officer will be able to make ingress changes to all the
 * enrollment's domains.
 *
 * The default value is `true`.
 *
 * Requires `control-panel:environment:administer` on the Control Panel root RID.
 */
export async function setContributorsCanApprovePatches(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  contributorsCanApprove: boolean,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/ingress/enrollment/${enrollmentRid}/contributors-can-approve?${new URLSearchParams(
      { "contributorsCanApprove": "" + contributorsCanApprove },
    )}`,
    "PUT",
  );
}
