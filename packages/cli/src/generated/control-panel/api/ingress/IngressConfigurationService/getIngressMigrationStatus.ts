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
import type { IngressMigrationStatus } from "../IngressMigrationStatus.js";

/**
 * Returns the status of the ingress migration for the enrollment. Refer to documentation of
 * `IngressMigrationStatus` for more details.
 *
 * No special permissions are required for this endpoint, a valid authorization header must however be provided.
 */
export async function getIngressMigrationStatus(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
): Promise<IngressMigrationStatus> {
  return conjureFetch(
    ctx,
    `/ingress/enrollment/${enrollmentRid}/migration-status`,
    "GET",
  );
}
