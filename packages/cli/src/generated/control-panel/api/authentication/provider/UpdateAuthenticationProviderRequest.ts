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

import type { UpdateOidcAuthenticationProviderRequest } from "./UpdateOidcAuthenticationProviderRequest.js";
import type { UpdateSamlAuthenticationProviderRequest } from "./UpdateSamlAuthenticationProviderRequest.js";
export interface UpdateAuthenticationProviderRequest_oidc {
  type: "oidc";
  oidc: UpdateOidcAuthenticationProviderRequest;
}

export interface UpdateAuthenticationProviderRequest_saml {
  type: "saml";
  saml: UpdateSamlAuthenticationProviderRequest;
}
export type UpdateAuthenticationProviderRequest =
  | UpdateAuthenticationProviderRequest_oidc
  | UpdateAuthenticationProviderRequest_saml;
