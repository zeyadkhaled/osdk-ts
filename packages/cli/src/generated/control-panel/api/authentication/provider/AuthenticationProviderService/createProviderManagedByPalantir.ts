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
import type { OrganizationRid } from "../../../OrganizationRid.js";
import type { AuthenticationProviderWithRid } from "../AuthenticationProviderWithRid.js";

/**
 * Creates a SAML provider that will be used for the purpose of Palantirians logging into the enrollment and
 * organization.
 *
 * This provider is expected to be managed by Palantir through Avatar.
 *
 * Compared to a normal provider created through the `createProvider` endpoint, a provider created through this
 * endpoint has a few special characteristics:
 * - Organization triaging is automatically setup for it, by triaging all users and groups from the provider's
 * realm into the provided organization.
 * - Enforcement of Multi Factor Authentication (MFA) through the Two FA User Manager is disabled, since the
 * provider is expected to provide MFA.
 *
 * This endpoint should only be called by BLT, when an enrollment requires such a provider at bootstrapping time.
 * The `control-panel:environment:administer` operation is required on Control Panel's root node to use this
 * endpoint.
 */
export async function createProviderManagedByPalantir(
  ctx: ConjureContext,
  organizationRid: OrganizationRid,
  displayName: string | undefined,
): Promise<AuthenticationProviderWithRid> {
  return conjureFetch(
    ctx,
    `/authentication-provider/organization/${organizationRid}/create/managed-by-palantir?${new URLSearchParams(
      { "displayName": "" + displayName },
    )}`,
    "POST",
  );
}
