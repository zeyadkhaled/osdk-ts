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

import type { OidcProviderAttributes } from "./OidcProviderAttributes.js";
import type { SamlProviderAttributes } from "./SamlProviderAttributes.js";
export interface ProviderAttributes_oidc {
  type: "oidc";
  oidc: OidcProviderAttributes;
}

export interface ProviderAttributes_saml {
  type: "saml";
  saml: SamlProviderAttributes;
}
export type ProviderAttributes =
  | ProviderAttributes_oidc
  | ProviderAttributes_saml;
