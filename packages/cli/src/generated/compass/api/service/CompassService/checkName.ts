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
import type { CheckNameRequest } from "../../request/CheckNameRequest.js";

/**
 * Determines if the provided name is a valid name for a new resource in the folder.
 *
 * A name is valid if it does not collide with the names of any existing untrashed resources.
 * This method explicitly checks against resources the user may not have access to see.
 *
 * Throws:
 * ForbiddenException if the user does not have write or create autosave permissions to the parentRid
 * NotFoundException if the user does not have read permissions to the parentRid
 */
export async function checkName(
  ctx: ConjureContext,
  parentRid: string,
  request: CheckNameRequest,
): Promise<boolean> {
  return conjureFetch(
    ctx,
    `/resources/${parentRid}/checkName`,
    "POST",
    request,
  );
}
