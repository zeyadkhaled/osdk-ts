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

import type { CbacMarkingConstraint } from "../constraint/CbacMarkingConstraint.js";
import type { MandatoryMarkingConstraintPatches } from "../constraint/MandatoryMarkingConstraintPatches.js";
import type { MarkingPatch } from "../marking/MarkingPatch.js";
import type { PermissionPatch } from "../project/permissions/PermissionPatch.js";
import type { RoleGrantPatch } from "../project/roles/RoleGrantPatch.js";
export interface UpdateProjectRequest {
  description: string | undefined;
  name: string | undefined;
  isPrivate: boolean | undefined;
  propagatePermissions: boolean | undefined;
  permissionPatches: Array<PermissionPatch>;
  roleGrantPatches: Array<RoleGrantPatch>;
  organizationMarkingPatches: Array<MarkingPatch>;
  cbacMarkingConstraint: CbacMarkingConstraint | undefined;
  mandatoryMarkingConstraintPatches:
    | MandatoryMarkingConstraintPatches
    | undefined;
  projectAccessMarkingPatches: Array<MarkingPatch> | undefined;
  markingPatches: Array<MarkingPatch>;
}
