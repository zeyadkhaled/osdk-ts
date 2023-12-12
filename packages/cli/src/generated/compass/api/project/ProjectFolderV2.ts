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
import type { DecoratedResource } from "../DecoratedResource.js";
import type { Principal } from "./permissions/Principal.js";
import type { ProjectType } from "./permissions/ProjectType.js";
import type { RoleContext } from "./RoleContext.js";
import type { RoleId } from "./RoleId.js";
import type { RoleSetId } from "./RoleSetId.js";

/**
 * A Compass project.
 */
export interface ProjectFolderV2 {
  resource: DecoratedResource;
  roleContext: RoleContext | undefined;
  roleSets: Array<RoleSetId>;
  roleGrants: Record<RoleId, Array<Principal>>;
  isServiceProject: boolean;
  type: ProjectType;
  canViewContent: boolean;
  userRoles: Array<RoleId>;
  propagatePermissions: boolean;
  operations: Array<string>;
  cbacMarkingConstraint: CbacMarkingConstraint;
  mandatoryMarkingConstraints: Array<MandatoryMarkingConstraint>;
  projectAccessMarkingsEnabled: boolean;
  resourceLevelRoleGrantsAllowed: boolean;
  inheritNamespaceOrganizationMarkings: boolean;
  namespaceRid: string;
}
