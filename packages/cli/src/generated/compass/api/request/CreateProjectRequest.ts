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
import type { MandatoryMarkingConstraint } from "../constraint/MandatoryMarkingConstraint.js";
import type { Permission } from "../project/permissions/Permission.js";
import type { Principal } from "../project/permissions/Principal.js";
import type { RoleId } from "../project/RoleId.js";
import type { RoleSetId } from "../project/RoleSetId.js";
export interface CreateProjectRequest {
  organizationRid: string;
  description: string;
  name: string;
  isPrivate: boolean;
  propagatePermissions: boolean | undefined;
  permissions: Array<Permission>;
  roleGrants: Record<RoleId, Array<Principal>>;
  roleSets: Array<RoleSetId>;
  organizationMarkingIds: Array<string>;
  markingIds: Array<string>;
  fileSystemId: string | undefined;
  usageAccountRid: string | undefined;
  cbacMarkingConstraint: CbacMarkingConstraint | undefined;
  mandatoryMarkingConstraints: Array<MandatoryMarkingConstraint>;
  projectAccessMarkingIds: Array<string> | undefined;
}
