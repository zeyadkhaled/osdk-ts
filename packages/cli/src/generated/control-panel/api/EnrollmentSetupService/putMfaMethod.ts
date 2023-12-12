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
import type { EnrollmentRid } from "../EnrollmentRid.js";
import type { EnrollmentSetupTokenPassword } from "../EnrollmentSetupTokenPassword.js";
import type { MfaMethod } from "../mfamanagement/MfaMethod.js";

/**
 * Sets the provided MFA method on the enrollment setup's authentication provider.
 *
 * Throws if the setup provider has not yet been created (via the `createAuthenticationProvider` endpoint above).
 */
export async function putMfaMethod(
  ctx: ConjureContext,
  tokenPassword: EnrollmentSetupTokenPassword,
  enrollmentRid: EnrollmentRid,
  mfaMethod: MfaMethod,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/enrollment-setup/${enrollmentRid}/mfa-method/${mfaMethod}`,
    "PUT",
  );
}
