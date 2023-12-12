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
import type { RoleGrantPatch } from "../api/project/roles/RoleGrantPatch.js";
import type { DefaultRoles } from "../api/template/DefaultRoles.js";
import type { TemplateRid } from "../api/template/TemplateRid.js";
export interface CreateProjectWithTemplateRequestParams {
  name: string;
  description: string | undefined;
  roleGrantPatches: Array<RoleGrantPatch>;
  defaultRoles: DefaultRoles | undefined;
  organizationMarkingPatches: Array<MarkingPatch>;
  existingMarkingPatches: Array<MarkingPatch>;
  namespaceRid: string;
  templateRid: TemplateRid;
}
