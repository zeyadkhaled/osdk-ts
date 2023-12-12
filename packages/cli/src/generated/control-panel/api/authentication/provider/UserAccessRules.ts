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

import type { UserAccessRule } from "./UserAccessRule.js";

/**
 * A series of sequential if statements determining whether a user is allowed to log in via a provider.
 * A `UserInfo` is evaluated against the `rules` sequentially. The `access` of the first rule the `UserInfo` matches is enforced.
 * If the `UserInfo` does not match any `rules`, the user is denied login (equivalent to enforcing a `DenyUserAccess`).
 */
export interface UserAccessRules {
  rules: Array<UserAccessRule>;
}
