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
import type { UpdateHomeProjectMarkingsRequest } from "../../UpdateHomeProjectMarkingsRequest.js";
import type { UpdateHomeProjectMarkingsResponse } from "../../UpdateHomeProjectMarkingsResponse.js";

/**
 * Adds or removes organization markings from the home projects of the specified users or users in the specified Multipass organizations.
 *
 * All home folders must have already been migrated to home projects.
 *
 * This endpoint requires `compass:migrate` on `ri.compass.main.resource.admin`. The caller must also have permissions to apply the marking changes.
 *
 * This endpoint does not verify that users still have permissions to their home project after this endpoint is called, so take care when removing any organization markings.
 */
export async function updateHomeProjectMarkings(
  ctx: ConjureContext,
  request: UpdateHomeProjectMarkingsRequest,
): Promise<UpdateHomeProjectMarkingsResponse> {
  return conjureFetch(ctx, `/admin-migration/markings`, "POST", request);
}
