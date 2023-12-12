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
import type { BatchRequestAccessRequest } from "../BatchRequestAccessRequest.js";

/**
 * Requests access to multiple resources. Separate notifications are triggered for each resource in the same
 * way as in the singular request access endpoint. None of the resources requested can be hidden resources,
 * nor can they be service projects or service project resources.
 */
export async function batchRequestAccess(
  ctx: ConjureContext,
  request: BatchRequestAccessRequest,
): Promise<void> {
  return conjureFetch(ctx, `/shares/resource/batch/request`, "POST", request);
}
