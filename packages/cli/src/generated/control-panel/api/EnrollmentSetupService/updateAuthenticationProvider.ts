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
import type { AuthenticationProvider } from "../authentication/provider/AuthenticationProvider.js";
import type { UpdateAuthenticationProviderRequest } from "../authentication/provider/UpdateAuthenticationProviderRequest.js";
import type { EnrollmentRid } from "../EnrollmentRid.js";
import type { EnrollmentSetupTokenPassword } from "../EnrollmentSetupTokenPassword.js";

/**
 * Updates the authentication provider associated to the enrollment setup context.
 */
export async function updateAuthenticationProvider(
  ctx: ConjureContext,
  tokenPassword: EnrollmentSetupTokenPassword,
  enrollmentRid: EnrollmentRid,
  request: UpdateAuthenticationProviderRequest,
): Promise<AuthenticationProvider> {
  return conjureFetch(
    ctx,
    `/enrollment-setup/${enrollmentRid}/authentication-provider`,
    "PUT",
    request,
  );
}
