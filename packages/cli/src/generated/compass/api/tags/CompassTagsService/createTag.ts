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
import type { CreateTagRequest } from "../CreateTagRequest.js";
import type { Tag } from "../Tag.js";

/**
 * Create a tag as a child of the specified category
 *
 * Throws
 * NotFound if the specified category does not exist
 * DuplicateName if a Tag with the same name already exists within the parent Category
 * InsufficientPermissions, GatekeeperInsufficientPermissions if the user does not have permission to create a tag in the specified category
 *
 * Returns the newly created Tag.
 */
export async function createTag(
  ctx: ConjureContext,
  categoryRid: string,
  createTagRequest: CreateTagRequest,
): Promise<Tag> {
  return conjureFetch(
    ctx,
    `/categories/${categoryRid}/tags`,
    "POST",
    createTagRequest,
  );
}
