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
import type { MultipassGroupAumRuleRid } from "../MultipassGroupAumRuleRid.js";

/**
 * Deletes a rule stored in the Multipass Group AUM service.
 *
 * Requires `control-panel:authentication-provider:edit` on the provider RID.
 *
 * Returns true if the rule was in fact deleted, false otherwise.
 */
export async function deleteRule(
  ctx: ConjureContext,
  providerRid: AuthenticationProviderRid,
  ruleRid: MultipassGroupAumRuleRid,
): Promise<boolean> {
  return conjureFetch(
    ctx,
    `/multipass-group-aum-rules/providers/${providerRid}/rules/${ruleRid}`,
    "DELETE",
  );
}
