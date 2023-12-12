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
import type { CreateBlindAccessRequestRequest } from "../../request/CreateBlindAccessRequestRequest.js";

/**
 * Creates an access request to a resource the requester can't discover.
 *
 * The request creation is ignored for the following cases:
 * - The resource does not exist
 * - The resource's project is not requestable, i.e. at least one one of the following cases is true:
 * - The project is a home folder
 * - The project is trashed
 * - The project is a service project
 * - The requester does not have access to any of the resource's project Org markings
 * - The requester does not satisfy the resource's project CBAC markings
 */
export async function createBlindAccessRequest(
  ctx: ConjureContext,
  rid: string,
  request: CreateBlindAccessRequestRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/request-access/request/blind/${rid}`,
    "POST",
    request,
  );
}
