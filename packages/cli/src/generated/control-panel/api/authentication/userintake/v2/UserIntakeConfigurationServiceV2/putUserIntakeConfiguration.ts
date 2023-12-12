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
import type { PutUserIntakeConfigurationRequest } from "../PutUserIntakeConfigurationRequest.js";
import type { UserIntakeConfiguration } from "../UserIntakeConfiguration.js";

/**
 * Updates the user intake configuration associated with a provider.
 * Requires `control-panel:authentication-provider:edit` on the provider.
 */
export async function putUserIntakeConfiguration(
  ctx: ConjureContext,
  providerRid: AuthenticationProviderRid,
  request: PutUserIntakeConfigurationRequest,
): Promise<UserIntakeConfiguration> {
  return conjureFetch(
    ctx,
    `/user-intake/v2/providers/${providerRid}`,
    "PUT",
    request,
  );
}
