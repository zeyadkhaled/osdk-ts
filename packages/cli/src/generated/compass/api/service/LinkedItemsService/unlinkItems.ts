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
import type { UnlinkItemsRequest } from "../../linkeditems/UnlinkItemsRequest.js";

/**
 * Remote the set of linked items from the specified Compass resource. If any of the target resources
 * are themselves Compass resources the link will be removed from the other direction as well.
 */
export async function unlinkItems(
  ctx: ConjureContext,
  compassRid: string,
  request: UnlinkItemsRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/linked-items/unlink/${compassRid}`,
    "POST",
    request,
  );
}
