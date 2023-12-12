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
import type { Category } from "../Category.js";
import type { UpdateCategoryRequest } from "../UpdateCategoryRequest.js";

/**
 * Update the metadata associated with a Category.
 *
 * Throws
 * NotFound if the Category does not exist
 * InsufficientPermissions, GatekeeperInsufficientPermissions if the caller does not have permission to update the Category
 * OrganizationNotFound if the requested organization marking(s) does not exist
 *
 * Returns the updated Category.
 */
export async function updateCategory(
  ctx: ConjureContext,
  categoryRid: string,
  updateCategoryRequest: UpdateCategoryRequest,
): Promise<Category> {
  return conjureFetch(
    ctx,
    `/categories/${categoryRid}`,
    "PUT",
    updateCategoryRequest,
  );
}
