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

import type { Attribution } from "./Attribution.js";
import type { Branch } from "./branches/Branch.js";
import type { BranchWithMarkings } from "./branches/BranchWithMarkings.js";
import type { Classification } from "./Classification.js";
import type { ContactInformation } from "./contacts/ContactInformation.js";
import type { Deprecation } from "./Deprecation.js";
import type { LinkedItem } from "./linkeditems/LinkedItem.js";
import type { MarkingInfo } from "./marking/MarkingInfo.js";
import type { NamedResourceIdentifier } from "./NamedResourceIdentifier.js";
import type { BackedObjectTypeInfo } from "./ontology/BackedObjectTypeInfo.js";
import type { DisableInheritedPermissionsType } from "./project/roles/DisableInheritedPermissionsType.js";

/**
 * A Resource that includes optional properties computed by Compass based on extra information outside of the resource
 * itself.
 */
export interface DecoratedResource {
  rid: string;
  name: string;
  created: Attribution | undefined;
  modified: Attribution | undefined;
  lastModified: string | undefined;
  description: string | undefined;
  operations: Array<string> | undefined;
  urlVariables: Record<string, string>;
  favorite: boolean | undefined;
  branches: Array<Branch> | undefined;
  defaultBranch: Branch | undefined;
  defaultBranchWithMarkings: BranchWithMarkings | undefined;
  branchesCount: string | undefined;
  hasBranches: boolean | undefined;
  hasMultipleBranches: boolean | undefined;
  backedObjectTypes: Array<BackedObjectTypeInfo> | undefined;
  path: string | undefined;
  longDescription: string | undefined;
  directlyTrashed: boolean;
  inTrash: boolean | undefined;
  isAutosave: boolean;
  isHidden: boolean;
  deprecation: Deprecation | undefined;
  collections: Array<string> | undefined;
  namedCollections: Array<NamedResourceIdentifier> | undefined;
  tags: Array<string> | undefined;
  namedTags: Array<NamedResourceIdentifier> | undefined;
  alias: string | undefined;
  collaborators: Array<Attribution> | undefined;
  namedAncestors: Array<NamedResourceIdentifier> | undefined;
  markings: Array<MarkingInfo> | undefined;
  projectAccessMarkings: Array<MarkingInfo> | undefined;
  linkedItems: Array<LinkedItem> | undefined;
  contactInformation: ContactInformation | undefined;
  classification: Classification | undefined;
  disableInheritedPermissions: DisableInheritedPermissionsType | undefined;
  propagatePermissions: boolean | undefined;
  resourceLevelRoleGrantsAllowed: boolean | undefined;
}
