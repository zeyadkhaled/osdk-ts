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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type { Template } from "../../template/Template.js";
import type { TemplateRid } from "../../template/TemplateRid.js";
import type { UpdateTemplateRequest } from "../../template/UpdateTemplateRequest.js";

/**
 * Endpoint to update a template.
 * Throws:
 * InsufficientPermissions if the user does not have compass:edit-template on the namespace specified
 * in the request.
 * For non-empty request fields:
 * SafeIllegalArgumentException if supportedNamespaceRids does not contain exactly one element.
 * SafeIllegalArgumentException if the roleIds part of DefaultRoles are not part of the role set.
 * SafeIllegalArgumentException if the proposed name is not unique on the proposed namespace.
 * ProjectDefaultRolesNotInNamespaceRoleSets if the project default role is not in the supported namespace role
 * sets.
 */
export async function updateTemplate(
  ctx: ConjureContext,
  templateRid: TemplateRid,
  request: UpdateTemplateRequest,
): Promise<Template> {
  return conjureFetch(ctx, `/templates/${templateRid}`, "POST", request);
}
