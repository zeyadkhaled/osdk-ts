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
import type { Principal } from "../project/permissions/Principal.js";
import type { RoleContext } from "../project/RoleContext.js";
import type { RoleId } from "../project/RoleId.js";
import type { RoleSetId } from "../project/RoleSetId.js";

/**
 * A request object used with the createProject endpoint.
 */
export interface CreateProjectRequestV2 {
  namespaceRid: string;
  projectRid: string | undefined;
  name: string;
  description: string;
  isPrivate: boolean;
  roleContext: RoleContext | undefined;
  roleSets: Array<RoleSetId>;
  roleGrants: Record<RoleId, Array<Principal>>;
  organizationMarkingIds: Array<string>;
  markingIds: Array<string>;
  cbacMarkingConstraint: CbacMarkingConstraint | undefined;
  mandatoryMarkingConstraints: Array<MandatoryMarkingConstraint>;
  projectAccessMarkingIds: Array<string> | undefined;
  resourceLevelRoleGrantsAllowed: boolean | undefined;
  inheritNamespaceOrganizationMarkings: boolean | undefined;
}
