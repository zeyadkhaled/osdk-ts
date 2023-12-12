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

import type { CrossOrganizationPermission } from "./CrossOrganizationPermission.js";
import type { OrganizationRid } from "./OrganizationRid.js";

/**
 * Defines initial cross-organization discoverability settings, when an organization is created.
 *
 * Bi-directional _organization_ discoverability will always be enabled between the newly created organization
 * and any other organization that appears in the fields below.
 *
 * The caller must have `organization:administer` on all existing organization RIDs that appear in the fields
 * below.
 */
export interface InitialCrossOrganizationPermissions {
  permissionsOnNewOrganization: Record<
    OrganizationRid,
    CrossOrganizationPermission
  >;
  permissionsOnExistingOrganizations: Record<
    OrganizationRid,
    CrossOrganizationPermission
  >;
}
