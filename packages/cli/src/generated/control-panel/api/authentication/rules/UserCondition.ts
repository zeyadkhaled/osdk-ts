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

import type { AttributeUserCondition } from "./AttributeUserCondition.js";
import type { GroupNameUserCondition } from "./GroupNameUserCondition.js";
import type { InternalGroupIdUserCondition } from "./InternalGroupIdUserCondition.js";
import type { NotUserCondition } from "./NotUserCondition.js";
import type { TrueUserCondition } from "./TrueUserCondition.js";
export interface UserCondition_attribute {
  type: "attribute";
  attribute: AttributeUserCondition;
}

export interface UserCondition_groupName {
  type: "groupName";
  groupName: GroupNameUserCondition;
}

export interface UserCondition_internalGroupId {
  type: "internalGroupId";
  internalGroupId: InternalGroupIdUserCondition;
}

export interface UserCondition_not {
  type: "not";
  not: NotUserCondition;
}

export interface UserCondition_true {
  type: "true";
  true: TrueUserCondition;
}
export type UserCondition =
  | UserCondition_attribute
  | UserCondition_groupName
  | UserCondition_internalGroupId
  | UserCondition_not
  | UserCondition_true;
