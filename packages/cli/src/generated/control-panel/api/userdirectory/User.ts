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

import type { Attribution } from "../Attribution.js";
import type { OrganizationRid } from "../OrganizationRid.js";
import type { MultipassUserId } from "./MultipassUserId.js";
import type { UserDirectoryRid } from "./UserDirectoryRid.js";
import type { UserDirectoryUserRid } from "./UserDirectoryUserRid.js";
import type { UserDirectoryUserState } from "./UserDirectoryUserState.js";

/**
 * Properties that map to user attributes (e.g. email, firstName, lastName) reflect the value stored in declared
 * user state. The values in Multipass and the user directory are asynchronously updated so it's possible for
 * them to be temporarily out-of-sync.
 */
export interface User {
  userDirectoryUserRid: UserDirectoryUserRid;
  userDirectoryRid: UserDirectoryRid;
  organizationRid: OrganizationRid;
  state: UserDirectoryUserState;
  lastModifiedAt: Attribution;
  multipassUserId: MultipassUserId | undefined;
  lastLoginDate: string | undefined;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
}
