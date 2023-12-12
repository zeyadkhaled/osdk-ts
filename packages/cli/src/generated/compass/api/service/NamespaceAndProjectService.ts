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

export { createNamespace } from "./NamespaceAndProjectService/createNamespace.js";
export { createProject } from "./NamespaceAndProjectService/createProject.js";
export { createProjectWithTemplate } from "./NamespaceAndProjectService/createProjectWithTemplate.js";
export { createServiceProject } from "./NamespaceAndProjectService/createServiceProject.js";
export { generateProjectRid } from "./NamespaceAndProjectService/generateProjectRid.js";
export { getAllConjunctiveMarkingsInProject } from "./NamespaceAndProjectService/getAllConjunctiveMarkingsInProject.js";
export { getAllNamespaceRids } from "./NamespaceAndProjectService/getAllNamespaceRids.js";
export { getAllPrincipalsWithRoleOnResources } from "./NamespaceAndProjectService/getAllPrincipalsWithRoleOnResources.js";
export { getEffectiveRoleGrants } from "./NamespaceAndProjectService/getEffectiveRoleGrants.js";
export { getEffectiveRolesForPrincipals } from "./NamespaceAndProjectService/getEffectiveRolesForPrincipals.js";
export { getNamespaceRidsForResources } from "./NamespaceAndProjectService/getNamespaceRidsForResources.js";
export { getNamespaces } from "./NamespaceAndProjectService/getNamespaces.js";
export { getProjectRidsForResources } from "./NamespaceAndProjectService/getProjectRidsForResources.js";
export { getProjects } from "./NamespaceAndProjectService/getProjects.js";
export { getRequiredProjectAccessMarkings } from "./NamespaceAndProjectService/getRequiredProjectAccessMarkings.js";
export { previewProjectAccessMarkingChange } from "./NamespaceAndProjectService/previewProjectAccessMarkingChange.js";
export { setNamespaceFileSystem } from "./NamespaceAndProjectService/setNamespaceFileSystem.js";
export { updateNamespace } from "./NamespaceAndProjectService/updateNamespace.js";
export { updateProject } from "./NamespaceAndProjectService/updateProject.js";
export { updateProjectAccessMarkingsEnabled } from "./NamespaceAndProjectService/updateProjectAccessMarkingsEnabled.js";
export { updateServiceProject } from "./NamespaceAndProjectService/updateServiceProject.js";
