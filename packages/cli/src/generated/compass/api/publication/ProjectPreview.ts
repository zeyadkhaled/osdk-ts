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

import type { MarkingId } from "../marking/MarkingId.js";
import type { ProjectInfo } from "./ProjectInfo.js";

/**
 * A preview of a Compass project resource that can be configured to have more relaxed security than the project
 * itself. Project previews can be used to expose the existence of projects to users without access to the
 * underlying projects. For example, a project that has a PAM on it is not visible to users without access to
 * that PAM. A project preview could be created that assumes that PAM so users without access to it can see the
 * project preview and request access to the underlying project.
 */
export interface ProjectPreview {
  rid: string;
  markingIds: Array<MarkingId>;
  organizationMarkingIds: Array<MarkingId>;
  longDescription: string | undefined;
  projectInfo: ProjectInfo;
}
