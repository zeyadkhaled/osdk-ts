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
import type { EnrollmentRid } from "../EnrollmentRid.js";
import type { FileSystemCatalogRid } from "../FileSystemCatalogRid.js";
import type { OrganizationRid } from "../OrganizationRid.js";

/**
 * Sends a `file-system-created` event to the enrollment FSM with the specified enrollment RID.
 *
 * Use only under the guidance of the product team in a P0 situation, and with a default file system created
 * manually with the endpoint above.
 *
 * Requires the `control-panel:file-system:create` operation on Control Panel's root node, which is only expected
 * to be granted to BLT.
 */
export async function sendFileSystemCreatedEvent(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  organizationRid: OrganizationRid,
  fileSystemRid: FileSystemCatalogRid,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/filesystems/enrollments/${enrollmentRid}/organizations/${organizationRid}/file-systems/${fileSystemRid}/send-fsm-event`,
    "PUT",
  );
}
