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

import type { Host } from "../../Host.js";
import type { AsyncUserManager } from "./AsyncUserManager.js";
import type { GroupAssignmentRules } from "./GroupAssignmentRules.js";
import type { GroupsMapper } from "./GroupsMapper.js";
import type { UserAccessRules } from "./UserAccessRules.js";
import type { UserMapper } from "./UserMapper.js";
export interface CreateSamlAuthenticationProviderRequest {
  enabled: boolean;
  displayName: string;
  supportedUsernamePatterns: Array<string>;
  supportedHosts: Array<Host>;
  asyncUserManagers: Array<AsyncUserManager>;
  userAccessRules: UserAccessRules;
  groupAssignmentRules: GroupAssignmentRules | undefined;
  users: UserMapper;
  groups: GroupsMapper;
  groupAccessMessage: string | undefined;
  groupAccessUrl: string | undefined;
  userIntakeFormEnabled: boolean | undefined;
  userIntakeFormVersion: number | undefined;
  userIntakeFormMinimumVersion: number | undefined;
  userIntakeFormInactivityRecurrenceDays: string | undefined;
  userIntakeFormAwaitingApprovalMessage: string | undefined;
  identityProviderMetadata: string | undefined;
  identityProviderMetadataUri: string | undefined;
  refreshIdentityProviderMetadata: boolean | undefined;
  isForceAuthn: boolean | undefined;
  isSingleLogoutEnabled: boolean | undefined;
  queryParameterAdditions: Record<string, string>;
}
