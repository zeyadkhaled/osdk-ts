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
import type { GetMyAccessRequestsRequest } from "../GetMyAccessRequestsRequest.js";
import type { GetMyAccessRequestsResponse } from "../GetMyAccessRequestsResponse.js";

/**
 * Gets the access requests for the given resources and the calling user, or returns empty if none exists.
 * Retrieves up to a maximum of 1000 AccessRequests per endpoint call.
 */
export async function getMyAccessRequests(
  ctx: ConjureContext,
  request: GetMyAccessRequestsRequest,
): Promise<GetMyAccessRequestsResponse> {
  return conjureFetch(
    ctx,
    `/shares/resource/batch/request/requester`,
    "POST",
    request,
  );
}
