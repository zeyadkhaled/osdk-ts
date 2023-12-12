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
import type { ProjectRidsPage } from "../../project/ProjectRidsPage.js";

/**
 * Returns all projects in a namespace, including service projects and trashed projects.
 */
export async function getAllNamespaceProjectRids(
  ctx: ConjureContext,
  namespaceRid: string,
  pageSize: string | undefined,
  pageToken: string | undefined,
): Promise<ProjectRidsPage> {
  return conjureFetch(
    ctx,
    `/hierarchy/namespaces/${namespaceRid}/project-rids?${new URLSearchParams({
      "pageSize": "" + pageSize,
      "pageToken": "" + pageToken,
    })}`,
    "GET",
  );
}
