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
import type { OrganizationRid } from "../OrganizationRid.js";
import type { PrincipalIdWithType } from "../PrincipalIdWithType.js";

/**
 * Creates an internal realm group that is granted:
 *
 * - The `enrollment:administrator` role on the organization's enrollment;
 * - The `organization:administrator` role and the legacy Multipass administrator grants for the organization
 * that further allows administering it;
 * - The Owner role over the organization's private namespace, if such a namespace has been bootstrapped
 * by Control Panel.
 *
 * This endpoint should only be called by BLT, when an enrollment requires such a setup at bootstrapping time
 * (e.g. to setup Palantirian administrative access). The `control-panel:environment:administer` operation is
 * required on Control Panel's root node to use this endpoint. Furthermore, due to the sensitive nature of this
 * endpoint (it modifies administrative access), it can be used at most one week after the organization has been
 * bootstrapped through Control Panel.
 */
export async function createInternalGroupWithAdministrativePermissions(
  ctx: ConjureContext,
  organizationRid: OrganizationRid,
  groupName: string | undefined,
): Promise<PrincipalIdWithType> {
  return conjureFetch(
    ctx,
    `/admin/organization/${organizationRid}/create-internal-group-with-administrative-permissions?${new URLSearchParams(
      { "groupName": "" + groupName },
    )}`,
    "POST",
  );
}
