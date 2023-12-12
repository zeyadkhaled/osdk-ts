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

import type { TemplateRid } from "../template/TemplateRid.js";
import type { DeletionPolicyResponse } from "./DeletionPolicyResponse.js";
import type { RoleContext } from "./RoleContext.js";
import type { RoleSetId } from "./RoleSetId.js";

/**
 * Represents various settings that are used for projects in the namespace.
 * Settings are optional as they may not be filled out for now, but will ultimately be all present.
 */
export interface NamespaceSettings {
  fileSystemId: string | undefined;
  usageAccountRid: string | undefined;
  resourceQueueRid: string | undefined;
  roleSets: Array<RoleSetId>;
  roleSetsByRoleContext: Record<RoleContext, RoleSetId>;
  deletionPolicy: DeletionPolicyResponse | undefined;
  requireProjectAccessMarkings: boolean | undefined;
  defaultTemplateRid: TemplateRid | undefined;
}
