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

import type { CreateGroup } from "./CreateGroup.js";
import type { CreateMarking } from "./CreateMarking.js";
import type { UpdateAppliedMarkings } from "./UpdateAppliedMarkings.js";
import type { UpdateGroupPrincipals } from "./UpdateGroupPrincipals.js";
import type { UpdateMarkingPrincipals } from "./UpdateMarkingPrincipals.js";
import type { UpdateRoleGrants } from "./UpdateRoleGrants.js";
export interface Task_createMarking {
  type: "createMarking";
  createMarking: CreateMarking;
}

export interface Task_createGroup {
  type: "createGroup";
  createGroup: CreateGroup;
}

export interface Task_updateRoleGrants {
  type: "updateRoleGrants";
  updateRoleGrants: UpdateRoleGrants;
}

export interface Task_updateAppliedMarkings {
  type: "updateAppliedMarkings";
  updateAppliedMarkings: UpdateAppliedMarkings;
}

export interface Task_updateGroupPrincipals {
  type: "updateGroupPrincipals";
  updateGroupPrincipals: UpdateGroupPrincipals;
}

export interface Task_updateMarkingPrincipals {
  type: "updateMarkingPrincipals";
  updateMarkingPrincipals: UpdateMarkingPrincipals;
}
/**
 * A task that executes some setup step before a project is created
 */
export type Task =
  | Task_createMarking
  | Task_createGroup
  | Task_updateRoleGrants
  | Task_updateAppliedMarkings
  | Task_updateGroupPrincipals
  | Task_updateMarkingPrincipals;
