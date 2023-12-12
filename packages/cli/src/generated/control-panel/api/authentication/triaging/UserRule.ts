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
import type { UserCondition } from "../rules/UserCondition.js";

/**
 * If a user matches all of the `conditions`, they will be triaged into the `organization`.
 */
export interface UserRule {
  conditions: Array<UserCondition>;
  organization: OrganizationRid;
}
