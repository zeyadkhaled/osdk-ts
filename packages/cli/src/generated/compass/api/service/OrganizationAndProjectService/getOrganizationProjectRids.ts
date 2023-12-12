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

/**
 * Returns all projects in a namespace, except service projects and projects that are trashed. If service projects are needed, use OrganizationAndProjectService's getDecoratedOrganizationAndProjectInfos endpoint with specific resource identifiers or OrganizationAndProjectService's getAllNamespaceProjectRids endpoint.
 */
export async function getOrganizationProjectRids(
  ctx: ConjureContext,
  rid: string,
): Promise<Array<string>> {
  return conjureFetch(
    ctx,
    `/hierarchy/organizations/${rid}/project-rids`,
    "GET",
  );
}
