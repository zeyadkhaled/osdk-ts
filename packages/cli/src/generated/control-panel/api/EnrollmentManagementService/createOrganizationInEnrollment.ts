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
import type { CreateOrganizationInEnrollmentRequest } from "../CreateOrganizationInEnrollmentRequest.js";
import type { CreateOrganizationInEnrollmentResponse } from "../CreateOrganizationInEnrollmentResponse.js";
import type { EnrollmentRid } from "../EnrollmentRid.js";

/**
 * Creates a new Multipass organization and adds it to the enrollment.
 *
 * Initial organization administrators and cross-organization discoverability settings are set as specified in
 * the request: refer to `CreateOrganizationInEnrollmentRequest`.
 *
 * A default managed file system is created if the file system creation strategy is
 * FileSystemCreationStrategy#CREATE_MANAGED_FILE_SYSTEM. Note that if it is
 * FileSystemCreationStrategy#CANNOT_BE_DETERMINED, then this endpoint fails without creating anything: callers
 * are expected to check this before calling this endpoint (with the `getOrganizationCreationInfo` endpoint).
 *
 * Throws `CannotCreateOrganizationIfEnrollmentUsesCustomerProvidedEncryption` if the enrollment has file systems
 * using customer-owned encryption keys. This is to avoid accidentally creating a file system using
 * Palantir-owned encryption in this case.
 *
 * Requires the `control-panel:enrollment:create-organization` operation on the enrollment RID, which is granted
 * to enrollment administrators.
 */
export async function createOrganizationInEnrollment(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  request: CreateOrganizationInEnrollmentRequest,
): Promise<CreateOrganizationInEnrollmentResponse> {
  return conjureFetch(
    ctx,
    `/admin/enrollment/${enrollmentRid}/create-organization`,
    "POST",
    request,
  );
}
