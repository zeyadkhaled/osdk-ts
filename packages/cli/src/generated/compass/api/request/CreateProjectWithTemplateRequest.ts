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

import type { MarkingPatch } from "../marking/MarkingPatch.js";
import type { RoleGrantPatch } from "../project/roles/RoleGrantPatch.js";
import type { DefaultRoles } from "../template/DefaultRoles.js";
import type { TemplateRid } from "../template/TemplateRid.js";

/**
 * A request object used with the createProjectWithTemplate endpoint. In general, the template's tasks will first
 * be executed and its effects applied to the project, and then the relevant patches are applied.
 */
export interface CreateProjectWithTemplateRequest {
  name: string;
  description: string | undefined;
  roleGrantPatches: Array<RoleGrantPatch>;
  defaultRoles: DefaultRoles | undefined;
  organizationMarkingPatches: Array<MarkingPatch>;
  existingMarkingPatches: Array<MarkingPatch>;
  namespaceRid: string;
  templateRid: TemplateRid;
}
