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
import type { CompassCollection } from "../CompassCollection.js";

/**
 * Every project is linked with exactly one project-local collection.
 *
 * Returns a map from project rid to the project-local collection of this project.
 * Collections the caller does not have access to are omitted from the response.
 *
 * Throws IllegalArgumentException if the number of requested rids is greater than 100.
 */
export async function getProjectCollections(
  ctx: ConjureContext,
  projectRids: Array<string>,
): Promise<Record<string, CompassCollection>> {
  return conjureFetch(ctx, `/collections/project`, "POST", projectRids);
}
