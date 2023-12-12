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

import type { GetBranchesForResourceQuery } from "./GetBranchesForResourceQuery.js";

/**
 * A request object used with the getBranchesForResources endpoint. The maximum total number of branches per
 * request (queries * pageSize) is 2000. If this limit is exceeded, the page size will be capped to reduce
 * (queries * pageSize) below this limit.
 */
export interface GetBranchesForResourcesRequest {
  pageSize: string | undefined;
  queries: Array<GetBranchesForResourceQuery>;
}
