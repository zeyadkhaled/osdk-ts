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
import type { FinishEnrollmentSetupRequest } from "../FinishEnrollmentSetupRequest.js";

/**
 * - Sets the user who performed the login test with the given ID as administrator according to the context
 * configuration.
 * - Revokes the enrollment's setup token and deletes the context.
 *
 * Throws `ControlPanel:InvalidEnrollmentSetupToken` if no enrollment is found for the token.
 *
 * Throws `ControlPanel:UserNotFound` if the user who performed the login test doesn't exist. This can happen if
 * the login failed after the SAML authentication.
 *
 * The user must belong to the enrollment's setup realm's default organization.
 */
export async function finishEnrollmentSetup(
  ctx: ConjureContext,
  tokenPassword: EnrollmentSetupTokenPassword,
  enrollmentRid: EnrollmentRid,
  request: FinishEnrollmentSetupRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/enrollment-setup/${enrollmentRid}/finish-setup`,
    "PUT",
    request,
  );
}
