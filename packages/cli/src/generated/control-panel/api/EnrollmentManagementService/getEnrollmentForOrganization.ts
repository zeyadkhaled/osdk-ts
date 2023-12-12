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
import type { GetEnrollmentForOrganizationResponse } from "../GetEnrollmentForOrganizationResponse.js";
import type { OrganizationRid } from "../OrganizationRid.js";

/**
 * Resolves the RID and name of the enrollment that the provided organization belongs to, subject to:
 * - The caller being able to discover the organization.
 * - The caller being able to discover the enrollment.
 *
 * Users can always discover their own organization and enrollment.
 */
export async function getEnrollmentForOrganization(
  ctx: ConjureContext,
  organizationRid: OrganizationRid,
): Promise<GetEnrollmentForOrganizationResponse> {
  return conjureFetch(ctx, `/admin/enrollment/org/${organizationRid}`, "GET");
}
