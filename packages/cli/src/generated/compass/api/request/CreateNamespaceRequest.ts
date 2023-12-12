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

import type { DeletionPolicy } from "../project/DeletionPolicy.js";
import type { Principal } from "../project/permissions/Principal.js";
import type { RoleId } from "../project/RoleId.js";
import type { RoleSetId } from "../project/RoleSetId.js";

/**
 * Request to create a namespace.
 */
export interface CreateNamespaceRequest {
  name: string | undefined;
  alias: string | undefined;
  description: string;
  roleGrants: Record<RoleId, Array<Principal>>;
  organizationMarkingIds: Array<string>;
  fileSystemId: string;
  usageAccountRid: string;
  resourceQueueRid: string | undefined;
  roleSets: Array<RoleSetId>;
  deletionPolicy: DeletionPolicy;
  requireProjectAccessMarkings: boolean | undefined;
}
