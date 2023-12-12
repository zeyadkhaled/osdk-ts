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
import type { NetworkPolicyRid } from "../../NetworkPolicyRid.js";
import type { AsyncUserManager } from "./AsyncUserManager.js";
import type { ClientAuthenticationMethod } from "./ClientAuthenticationMethod.js";
import type { GroupAssignmentRules } from "./GroupAssignmentRules.js";
import type { GroupsMapper } from "./GroupsMapper.js";
import type { UserAccessRules } from "./UserAccessRules.js";
import type { UserMapper } from "./UserMapper.js";
export interface UpdateOidcAuthenticationProviderRequest {
  enabled: boolean | undefined;
  displayName: string | undefined;
  supportedUsernamePatterns: Array<string> | undefined;
  supportedHosts: Array<Host> | undefined;
  asyncUserManagers: Array<AsyncUserManager> | undefined;
  userAccessRules: UserAccessRules | undefined;
  groupAssignmentRules: GroupAssignmentRules | undefined;
  users: UserMapper | undefined;
  groups: GroupsMapper | undefined;
  groupAccessMessage: string | undefined;
  groupAccessUrl: string | undefined;
  userIntakeFormEnabled: boolean | undefined;
  userIntakeFormVersion: number | undefined;
  userIntakeFormMinimumVersion: number | undefined;
  userIntakeFormInactivityRecurrenceDays: string | undefined;
  userIntakeFormAwaitingApprovalMessage: string | undefined;
  networkPolicyRids: Array<NetworkPolicyRid> | undefined;
  clientId: string | undefined;
  clientSecret: string | undefined;
  clientAuthenticationMethod: ClientAuthenticationMethod | undefined;
  issuer: string | undefined;
  authorizationEndpoint: string | undefined;
  tokenEndpoint: string | undefined;
  jwkSetUri: string | undefined;
  refreshJwkSet: boolean | undefined;
  userInfoEndpoint: string | undefined;
  endSessionEndpoint: string | undefined;
  scope: Array<string> | undefined;
  prompt: Array<string> | undefined;
  logoutHintClaim: string | undefined;
}
