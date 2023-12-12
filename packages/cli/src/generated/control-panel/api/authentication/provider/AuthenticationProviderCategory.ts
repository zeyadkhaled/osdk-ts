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

import type { DefaultAuthenticationProviderCategory } from "./DefaultAuthenticationProviderCategory.js";
import type { PalantirOwnedAuthenticationProviderCategory } from "./PalantirOwnedAuthenticationProviderCategory.js";
import type { UserDirectoryAuthenticationProviderCategory } from "./UserDirectoryAuthenticationProviderCategory.js";
export interface AuthenticationProviderCategory_default {
  type: "default";
  default: DefaultAuthenticationProviderCategory;
}

export interface AuthenticationProviderCategory_palantirOwned {
  type: "palantirOwned";
  palantirOwned: PalantirOwnedAuthenticationProviderCategory;
}

export interface AuthenticationProviderCategory_userDirectory {
  type: "userDirectory";
  userDirectory: UserDirectoryAuthenticationProviderCategory;
}
export type AuthenticationProviderCategory =
  | AuthenticationProviderCategory_default
  | AuthenticationProviderCategory_palantirOwned
  | AuthenticationProviderCategory_userDirectory;
