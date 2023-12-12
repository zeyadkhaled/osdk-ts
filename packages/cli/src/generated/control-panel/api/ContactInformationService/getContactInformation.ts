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
import type { ContactInformation } from "../ContactInformation.js";
import type { EnrollmentRid } from "../EnrollmentRid.js";

/**
 * Returns a map of communication types and their associated contact details for the enrollment.
 *
 * If no contact details have ever been set, an empty map is returned.
 *
 * Requires `control-panel:enrollment:view-contact-information` on the enrollment RID.
 */
export async function getContactInformation(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
): Promise<ContactInformation> {
  return conjureFetch(
    ctx,
    `/contact-information/enrollment/${enrollmentRid}`,
    "GET",
  );
}
