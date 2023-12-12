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
import type { AuthenticationProviderRid } from "../../../AuthenticationProviderRid.js";
import type { AuthenticationProvider } from "../AuthenticationProvider.js";

/**
 * Allows enabling and disabling an authentication provider.  Requires `control-panel:authentication-provider:update-enabled-status`
 * on the provider RID.
 *
 * This action can also be performed via the `updateProvider` endpoint. This endpoint uses a more targeted
 * Gatekeeper operation, for cases where users should be able to do this without having permissions to update the
 * full provider configuration.
 */
export async function updateProviderEnabledStatus(
  ctx: ConjureContext,
  providerRid: AuthenticationProviderRid,
  enabled: boolean,
): Promise<AuthenticationProvider> {
  return conjureFetch(
    ctx,
    `/authentication-provider/${providerRid}/enabled/${enabled}`,
    "PUT",
  );
}
