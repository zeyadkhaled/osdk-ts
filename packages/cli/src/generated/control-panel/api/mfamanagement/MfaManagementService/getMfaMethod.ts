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
import type { AuthenticationProviderRid } from "../../AuthenticationProviderRid.js";
import type { MfaMethod } from "../MfaMethod.js";

/**
 * Returns an authentication provider's multi-factor authentication method if it was configured, or an empty
 * optional otherwise.
 *
 * Requires `control-panel:authentication-provider:view-mfa` on the provider RID.
 */
export async function getMfaMethod(
  ctx: ConjureContext,
  providerRid: AuthenticationProviderRid,
): Promise<MfaMethod | undefined> {
  return conjureFetch(ctx, `/mfa/provider/${providerRid}`, "GET");
}
