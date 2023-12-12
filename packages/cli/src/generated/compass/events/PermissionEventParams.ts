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

import type { CbacMarkingConstraint } from "../api/constraint/CbacMarkingConstraint.js";
import type { MandatoryMarkingConstraintPatches } from "../api/constraint/MandatoryMarkingConstraintPatches.js";
import type { MarkingPatch } from "../api/marking/MarkingPatch.js";
import type { DenyOperationPatch } from "../api/project/permissions/DenyOperationPatch.js";
import type { ProjectType } from "../api/project/permissions/ProjectType.js";
import type { UserGroupPrincipalPatch } from "../api/project/permissions/UserGroupPrincipalPatch.js";
import type { DisableInheritedPermissionsType } from "../api/project/roles/DisableInheritedPermissionsType.js";
import type { RoleGrantPatch } from "../api/project/roles/RoleGrantPatch.js";

/**
 * User-facing permission changes. Does not include actions like removing statements during a migration.
 */
export interface PermissionEventParams {
  disableInheritedPermissions: boolean | undefined;
  disableInheritedPermissionsType: DisableInheritedPermissionsType | undefined;
  disableInheritedPermissionsForPrincipalsPatches:
    | Array<UserGroupPrincipalPatch>
    | undefined;
  isPrivate: boolean | undefined;
  type: ProjectType | undefined;
  propagatePermissions: boolean | undefined;
  roleGrantPatches: Array<RoleGrantPatch> | undefined;
  denyOperationPatches: Array<DenyOperationPatch> | undefined;
  cbacMarkingConstraint: CbacMarkingConstraint | undefined;
  mandatoryMarkingConstraintPatches:
    | MandatoryMarkingConstraintPatches
    | undefined;
  projectAccessMarkingPatches: Array<MarkingPatch> | undefined;
  markingPatches: Array<MarkingPatch> | undefined;
}
