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
import type { AuthenticationProviderCategory } from "../AuthenticationProviderCategory.js";

/**
 * Returns the category of the authentication providers (e.g. owned by Palantir, used for user directories. etc.).
 * Providers on which the caller does not have `control-panel:authentication-provider:view`, or which do not exist, will not be returned.
 * Throws if more than 100 providers are requested.
 */
export async function getProviderCategories(
  ctx: ConjureContext,
  providerRids: Array<AuthenticationProviderRid>,
): Promise<Record<AuthenticationProviderRid, AuthenticationProviderCategory>> {
  return conjureFetch(
    ctx,
    `/authentication-provider/categories`,
    "PUT",
    providerRids,
  );
}
