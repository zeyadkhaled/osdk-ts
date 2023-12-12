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

import type { AsyncUserManager } from "./authentication/provider/AsyncUserManager.js";
import type { Host } from "./Host.js";
import type { SamlGroupExtractor } from "./SamlGroupExtractor.js";
import type { UpdateSamlUsersConfigRequest } from "./UpdateSamlUsersConfigRequest.js";
export interface UpdateSamlProviderRequest {
  displayName: string | undefined;
  idpMetadataXml: string | undefined;
  domains: Array<string> | undefined;
  samlUserMappers: UpdateSamlUsersConfigRequest | undefined;
  groupExtractor: SamlGroupExtractor | undefined;
  supportedHosts: Array<Host> | undefined;
  groupAccessMessage: string | undefined;
  groupAccessUrl: string | undefined;
  asyncUserManagers: Array<AsyncUserManager> | undefined;
}
