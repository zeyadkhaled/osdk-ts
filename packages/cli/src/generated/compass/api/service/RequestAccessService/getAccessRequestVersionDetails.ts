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
import type { AccessRequestRidAndVersion } from "../../request/AccessRequestRidAndVersion.js";
import type { GetAccessRequestVersionDetailsResponse } from "../../request/GetAccessRequestVersionDetailsResponse.js";

/**
 * Returns the details of the access requests in the requested versions. If the access request is not found or
 * the access request does not have the specified version, this returns no entry for this query. To get the
 * latest version without specifying the version use getAccessRequestDetailsV2 instead. The number of queries
 * must not exceed 200.
 */
export async function getAccessRequestVersionDetails(
  ctx: ConjureContext,
  queries: Array<AccessRequestRidAndVersion>,
): Promise<GetAccessRequestVersionDetailsResponse> {
  return conjureFetch(ctx, `/request-access/versioned`, "PUT", queries);
}
