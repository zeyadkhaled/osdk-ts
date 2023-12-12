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

import type { OrganizationFolder } from "./OrganizationFolder.js";
import type { ProjectFolder } from "./ProjectFolder.js";

/**
 * Information about the Compass namespace and project.
 * This object is kept for backcompatibility; "organization" refers to the Compass namespace.
 * See NamespaceAndProjectInfo for the latest object.
 */
export interface OrganizationAndProjectInfo {
  organization: OrganizationFolder;
  project: ProjectFolder;
}
