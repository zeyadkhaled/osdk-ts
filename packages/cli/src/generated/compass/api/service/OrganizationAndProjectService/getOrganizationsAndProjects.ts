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
import type { OrganizationAndProjectsPage } from "../../project/OrganizationAndProjectsPage.js";

/**
 * Returns all namespaces and projects; except the namespaces/projects created by the Compass system and any service projects. If Compass-system namespaces/ projects or service projects are needed, use OrganizationAndProjectService's getDecoratedOrganizationAndProjectInfos endpoint with specific resource identifiers.
 */
export async function getOrganizationsAndProjects(
  ctx: ConjureContext,
): Promise<OrganizationAndProjectsPage> {
  return conjureFetch(ctx, `/hierarchy/organizations/all-projects`, "GET");
}
