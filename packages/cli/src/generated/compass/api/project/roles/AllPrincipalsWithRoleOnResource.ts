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

import type { PrincipalContextualRoleGrant } from "./PrincipalContextualRoleGrant.js";

/**
 * Returns a set of principals and all the role grants that they have on a resource (both directly and indirectly).
 * A principal will only appear in this response at most once.
 *
 * If the calling user does have permission to view Group membership, the Group ID and all its members will be present
 * in the response.
 * If the calling user does not have permission to view Group membership for a Group, the Group ID will be present
 * in the response, but its group members will not.
 * If the calling user does not have permission to view a Principal with a role grant, that Principal will be omitted
 * from the response entirely.
 */
export interface AllPrincipalsWithRoleOnResource {
  principalRoleGrants: Array<PrincipalContextualRoleGrant>;
}
