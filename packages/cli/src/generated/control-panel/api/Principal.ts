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

import type { EveryoneInOrganization } from "./EveryoneInOrganization.js";
import type { Group } from "./Group.js";
import type { UserId } from "./UserId.js";
import type { Username } from "./Username.js";
export interface Principal_username {
  type: "username";
  username: Username;
}

export interface Principal_userId {
  type: "userId";
  userId: UserId;
}

export interface Principal_group {
  type: "group";
  group: Group;
}

export interface Principal_everyone {
  type: "everyone";
  everyone: EveryoneInOrganization;
}
/**
 * Permissions can be granted to one of these types:
 * <ul>
 * <li>userId - give permissions to a specific user with the given id</li>
 * <li>username - give permissions to a specific user with the given name and realm</li>
 * <li>group - give permissions to all users in the group with the given id</li>
 * <li>everyone - give permissions to all users in the provided organizationRid</li>
 * </ul>
 */
export type Principal =
  | Principal_username
  | Principal_userId
  | Principal_group
  | Principal_everyone;
