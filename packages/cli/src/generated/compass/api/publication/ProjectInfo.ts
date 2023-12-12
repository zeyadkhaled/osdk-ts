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

import type { Attribution } from "../Attribution.js";
import type { ContactInformation } from "../contacts/ContactInformation.js";
import type { MarkingId } from "../marking/MarkingId.js";
import type { MarkingInfo } from "../marking/MarkingInfo.js";
import type { NamedResourceIdentifier } from "../NamedResourceIdentifier.js";
import type { Principal } from "../project/permissions/Principal.js";
import type { RoleId } from "../project/RoleId.js";
import type { RoleSetId } from "../project/RoleSetId.js";

/**
 * Summarizing properties of a project resource exposed exposed by a project preview.
 */
export interface ProjectInfo {
  rid: string;
  name: string;
  description: string;
  alias: string | undefined;
  created: Attribution | undefined;
  modified: Attribution | undefined;
  lastModified: string | undefined;
  directlyTrashed: boolean;
  roleGrants: Record<RoleId, Array<Principal>>;
  roleSets: Array<RoleSetId>;
  namedTags: Array<NamedResourceIdentifier>;
  markingIds: Array<MarkingId>;
  markingInfos: Array<MarkingInfo>;
  inTrash: boolean | undefined;
  contactInformation: ContactInformation | undefined;
}
