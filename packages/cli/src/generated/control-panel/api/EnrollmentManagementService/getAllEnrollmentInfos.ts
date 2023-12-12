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
import type { EnrollmentInfosResponse } from "../EnrollmentInfosResponse.js";

/**
 * Returns enrollment and organization metadata for enrollments and organizations discoverable by the caller.
 *
 * The caller can always discover their own organization and enrollment.
 *
 * Other enrollments on which the caller has the `control-panel:enrollment:discover` operation will also be
 * included (along with constituent organizations that are discoverable according to Multipass). A way to get
 * this operation on an enrollment is by being granted an enrollment role on it (refer to
 * `EnrollmentPermissionsService`).
 *
 * Warning: this endpoint is expensive, since it loads all enrollments from Control Panel's enrollment store,
 * and all Multipass organizations from Multipass' organization store. Before using this endpoint, consider
 * whether you should be using:
 * - `getAllEnrollmentRids`, if you only need enrollment RIDs.
 * - `getEnrollmentInfos`, if you already know the enrollment RIDs that you want.
 * - `getEnrollmentForOrganization`, if you need to resolve the organization to enrollment link.
 */
export async function getAllEnrollmentInfos(
  ctx: ConjureContext,
): Promise<EnrollmentInfosResponse> {
  return conjureFetch(ctx, `/admin/enrollment/infos`, "GET");
}
