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
import type { GroupRule } from "./GroupRule.js";

/**
 * The `rules`s are checked against groups sequentially, in the order they exist in the list of `GroupRule`s.
 * The first rule the group matches determines the organizations the group should be triaged into, and the group
 * is not checked against any subsequent rules. If the group does not match any of the `rules`, it should
 * be triaged into the `fallbackOrganizations`. If no `fallbackOrganizations` exist, the group will not be
 * persisted to Multipass.
 */
export interface GroupRules {
  rules: Array<GroupRule>;
  fallbackOrganizations: Array<OrganizationRid>;
}
