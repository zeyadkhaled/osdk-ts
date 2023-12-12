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
import type { ConvertExistingProjectsRequest } from "../../request/ConvertExistingProjectsRequest.js";
import type { ConvertExistingProjectsResponse } from "../../response/ConvertExistingProjectsResponse.js";

/**
 * Convert existing projects to projects with organization markings. Cannot be used on projects with existing
 * organization markings, or on service projects.
 */
export async function convertExistingProjects(
  ctx: ConjureContext,
  requests: Array<ConvertExistingProjectsRequest>,
  isDryRun: boolean | undefined,
): Promise<ConvertExistingProjectsResponse> {
  return conjureFetch(
    ctx,
    `/convertExistingProjects?${new URLSearchParams({
      "isDryRun": "" + isDryRun,
    })}`,
    "POST",
    requests,
  );
}
