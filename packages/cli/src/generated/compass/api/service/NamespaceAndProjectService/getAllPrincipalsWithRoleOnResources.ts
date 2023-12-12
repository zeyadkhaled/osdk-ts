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
import type { GetAllPrincipalsWithRoleOnResourcesRequest } from "../../project/roles/GetAllPrincipalsWithRoleOnResourcesRequest.js";
import type { GetAllPrincipalsWithRoleOnResourcesResult } from "../../project/roles/GetAllPrincipalsWithRoleOnResourcesResult.js";

/**
 * For each resource, returns the ids of all principals that have roles on the resource (both direct and indirect).
 * Will only traverse groups that the requesting user has view membership permissions on. Group managers can view
 * memberships by default. View membership permissions can also be granted at the organization level.
 *
 * No more than 10 resources may be queried at once.
 */
export async function getAllPrincipalsWithRoleOnResources(
  ctx: ConjureContext,
  request: GetAllPrincipalsWithRoleOnResourcesRequest,
): Promise<GetAllPrincipalsWithRoleOnResourcesResult> {
  return conjureFetch(ctx, `/hierarchy/v2/roles/all`, "POST", request);
}
