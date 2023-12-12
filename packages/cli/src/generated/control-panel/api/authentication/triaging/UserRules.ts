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

import type { OrganizationRid } from "../../OrganizationRid.js";
import type { UserRule } from "./UserRule.js";

/**
 * The rules are checked against users sequentially, in the order they exist in the list of `UserRule`s.
 * The first rule the user matches determines the organization the user should be triaged into, and the user
 * is not checked against any subsequent rules. If the user does not match any of the `rules`, they should
 * be triaged into the `fallbackOrganization`, if present. If the `fallbackOrganization` is not present,
 * the user will be denied login.
 */
export interface UserRules {
  rules: Array<UserRule>;
  fallbackOrganization: OrganizationRid | undefined;
}
