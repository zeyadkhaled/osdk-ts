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

import type { NamePattern } from "./NamePattern.js";
import type { PostCreationTaskOutputRef } from "./PostCreationTaskOutputRef.js";
import type { TemplateTaskId } from "./TemplateTaskId.js";

/**
 * Create a folder in the newly created project or a specified subfolder. Outputs the RID of the folder that was created.
 */
export interface CreateFolder {
  id: TemplateTaskId;
  name: NamePattern;
  parentFolder: PostCreationTaskOutputRef | undefined;
}
