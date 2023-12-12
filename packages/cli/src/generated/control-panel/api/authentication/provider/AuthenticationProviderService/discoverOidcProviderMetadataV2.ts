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
import type { EnrollmentRid } from "../../../EnrollmentRid.js";
import type { DiscoverOidcProviderMetadataRequestV2 } from "../DiscoverOidcProviderMetadataRequestV2.js";
import type { OidcProviderMetadata } from "../OidcProviderMetadata.js";

/**
 * Discovers the OIDC provider metadata from an issuer by hitting the well-known
 * URL. Requires `control-panel:authentication-provider:edit` on the enrollment.
 *
 * OpenID providers supporting Discovery MUST make a JSON document available at the path formed by concatenating
 * the string /.well-known/openid-configuration to the issuer.
 */
export async function discoverOidcProviderMetadataV2(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  request: DiscoverOidcProviderMetadataRequestV2,
): Promise<OidcProviderMetadata> {
  return conjureFetch(
    ctx,
    `/authentication-provider/enrollment/${enrollmentRid}/oidc/discover`,
    "PUT",
    request,
  );
}
