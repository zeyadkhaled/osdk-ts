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

/**
 * A map from a resource RID to the file system ID of the project that the resource is contained in.
 * If the project does not exist, or the resource is not in a project, or the user has no permissions to the resource, then
 * the resource RID will not be present in the map. If the user can view the project but the project has
 * no file system ID, then the resource RID is returned with an empty value.
 */
export interface BatchGetProjectFileSystemIdResponse {
  ridToFileSystemId: Record<string, string | undefined>;
}
