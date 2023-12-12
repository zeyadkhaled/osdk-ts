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
import type { GetEffectiveRolesForPrincipalsRequest } from "../../project/GetEffectiveRolesForPrincipalsRequest.js";
import type { GetEffectiveRolesForPrincipalsResponse } from "../../project/GetEffectiveRolesForPrincipalsResponse.js";

/**
 * Computes the effective roles held by users on resources, taking into account group membership, role
 * inheritance, and Ignore Inherited Permissions.
 *
 * If the requester does not have permission to discover a user, resource, or any of a resource's ancestors, the
 * corresponding entry will be omitted from the result.
 *
 * No more than 100 queries may be provided at once.
 */
export async function getEffectiveRolesForPrincipals(
  ctx: ConjureContext,
  request: GetEffectiveRolesForPrincipalsRequest,
): Promise<GetEffectiveRolesForPrincipalsResponse> {
  return conjureFetch(
    ctx,
    `/hierarchy/v2/roles/effective/principals`,
    "PUT",
    request,
  );
}
