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
import type { CreateCategoryRequest } from "../CreateCategoryRequest.js";

/**
 * Create a new Category. A Organization parentRid may be specified to create this Category within an Organization,
 * otherwise the Category will be global.
 *
 * Throws
 * IllegalArgumentException if the parentRid isn't an empty Optional
 * InsufficientPermissions, GatekeeperInsufficientPermissions if the caller does not have permission to create a tags Category
 * OrganizationNotFound if the requested organization marking(s) does not exist
 *
 * Returns the newly created Category.
 */
export async function createCategory(
  ctx: ConjureContext,
  createCategoryRequest: CreateCategoryRequest,
): Promise<Category> {
  return conjureFetch(ctx, `/categories`, "POST", createCategoryRequest);
}
