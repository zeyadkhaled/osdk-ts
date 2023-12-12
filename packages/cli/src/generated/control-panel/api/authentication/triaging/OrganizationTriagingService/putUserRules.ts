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
import type { UserRules } from "../UserRules.js";

/**
 * Updates the organization triaging user rules for a given authentication provider. If a `UserRules` already
 * exists for the provider, this operation will fully overwrite it.
 *
 * To add rules for a provider, provide a `UserRules` object with additional rules in the `rules` field.
 *
 * To delete rules for a provider, provide a `UserRules` object with rules removed from the `rules` field.
 *
 * Requires `control-panel:authentication-provider:edit-organization-triaging` on the provider RID.
 *
 * The organizations for which the rules apply must belong to the enrollment of the authentication provider.
 */
export async function putUserRules(
  ctx: ConjureContext,
  providerRid: AuthenticationProviderRid,
  userRules: UserRules,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/organization-triaging/providers/${providerRid}/users`,
    "PUT",
    userRules,
  );
}
