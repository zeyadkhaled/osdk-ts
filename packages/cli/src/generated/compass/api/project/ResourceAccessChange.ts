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

import type { FromEveryoneResourceAccessChange } from "./FromEveryoneResourceAccessChange.js";
import type { NoChangeResourceAccessChange } from "./NoChangeResourceAccessChange.js";
import type { ToEveryoneResourceAccessChange } from "./ToEveryoneResourceAccessChange.js";
import type { UsersResourceAccessChange } from "./UsersResourceAccessChange.js";
export interface ResourceAccessChange_noChange {
  type: "noChange";
  noChange: NoChangeResourceAccessChange;
}

export interface ResourceAccessChange_fromEveryone {
  type: "fromEveryone";
  fromEveryone: FromEveryoneResourceAccessChange;
}

export interface ResourceAccessChange_toEveryone {
  type: "toEveryone";
  toEveryone: ToEveryoneResourceAccessChange;
}

export interface ResourceAccessChange_users {
  type: "users";
  users: UsersResourceAccessChange;
}
/**
 * Summarizes access changes.
 */
export type ResourceAccessChange =
  | ResourceAccessChange_noChange
  | ResourceAccessChange_fromEveryone
  | ResourceAccessChange_toEveryone
  | ResourceAccessChange_users;
