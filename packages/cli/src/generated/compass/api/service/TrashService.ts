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

export { addServiceProjectResourcesToTrash } from "./TrashService/addServiceProjectResourcesToTrash.js";
export { addToTrash } from "./TrashService/addToTrash.js";
export { deletePermanently } from "./TrashService/deletePermanently.js";
export { deleteServiceProjectResourcesPermanently } from "./TrashService/deleteServiceProjectResourcesPermanently.js";
export { getPermanentlyDeletedProjects } from "./TrashService/getPermanentlyDeletedProjects.js";
export { getPermanentlyDeletedRids } from "./TrashService/getPermanentlyDeletedRids.js";
export { registerProjectForDeletion } from "./TrashService/registerProjectForDeletion.js";
export { registerProjectsForDeletion } from "./TrashService/registerProjectsForDeletion.js";
export { restore } from "./TrashService/restore.js";
export { restoreServiceProjectResources } from "./TrashService/restoreServiceProjectResources.js";
export { unregisterProjectForDeletion } from "./TrashService/unregisterProjectForDeletion.js";
export { unregisterProjectsForDeletion } from "./TrashService/unregisterProjectsForDeletion.js";
