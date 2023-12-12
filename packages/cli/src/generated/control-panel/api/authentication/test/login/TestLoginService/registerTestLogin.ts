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
import type { AuthenticationProviderRid } from "../../../../AuthenticationProviderRid.js";
import type { RegisterTestLoginRequest } from "../RegisterTestLoginRequest.js";
import type { RegisterTestLoginResponse } from "../RegisterTestLoginResponse.js";

/**
 * Registers a test login, which will be updated throughout the login flow. Note that the results of test logins
 * are automatically deleted after one month.
 *
 * Requires `control-panel:authentication-provider:edit` on the provider RID.
 */
export async function registerTestLogin(
  ctx: ConjureContext,
  providerRid: AuthenticationProviderRid,
  request: RegisterTestLoginRequest,
): Promise<RegisterTestLoginResponse> {
  return conjureFetch(
    ctx,
    `/test-login/provider/${providerRid}`,
    "POST",
    request,
  );
}
