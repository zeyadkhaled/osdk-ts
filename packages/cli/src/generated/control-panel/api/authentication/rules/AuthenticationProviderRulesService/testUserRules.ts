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
import type { TestUserRulesRequest } from "../TestUserRulesRequest.js";
import type { TestUserRulesResponse } from "../TestUserRulesResponse.js";

/**
 * Returns which of the rules among the provided user rules, a `TestUser` would match.
 *
 * A `TestUser` is defined either through a Multipass User ID, or through a set of attributes, (external) group
 * names, and (internal) group IDs that a user might have after logging in.
 *
 * If the `TestUser` is a `userId`, also requires `multipass:administer-user` on the user's organization RID.
 *
 * Throws an error if the test user is specified through a Multipass User ID, but does not belong to the realm
 * of the authentication provider.
 *
 * Requires `control-panel:authentication-provider:test-rules` on the provider RID.
 */
export async function testUserRules(
  ctx: ConjureContext,
  providerRid: AuthenticationProviderRid,
  request: TestUserRulesRequest,
): Promise<TestUserRulesResponse> {
  return conjureFetch(
    ctx,
    `/authentication-provider-rules/providers/${providerRid}/test`,
    "PUT",
    request,
  );
}
