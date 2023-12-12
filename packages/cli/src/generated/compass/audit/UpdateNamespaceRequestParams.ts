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

import type { MarkingPatch } from "../api/marking/MarkingPatch.js";
import type { DeletionPolicyUpdate } from "../api/project/DeletionPolicyUpdate.js";
import type { RoleGrantPatch } from "../api/project/roles/RoleGrantPatch.js";
import type { RoleSetIdPatch } from "../api/project/roles/RoleSetIdPatch.js";
export interface UpdateNamespaceRequestParams {
  rid: string;
  name: string | undefined;
  roleGrantPatches: Array<RoleGrantPatch>;
  organizationMarkingPatches: Array<MarkingPatch>;
  usageAccountRid: string | undefined;
  resourceQueueRid: string | undefined;
  roleSetPatches: Array<RoleSetIdPatch>;
  deletionPolicyUpdate: DeletionPolicyUpdate | undefined;
}
