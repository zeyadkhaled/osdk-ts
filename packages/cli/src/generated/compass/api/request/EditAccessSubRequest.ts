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

import type { AccessSubRequestRid } from "./AccessSubRequestRid.js";
import type { EditAccessSubRequestDetails } from "./EditAccessSubRequestDetails.js";

/**
 * An update to an access subrequest used in an existing request. This update type also allows changing
 * subrequest type (e.g. role grant to group addition).
 */
export interface EditAccessSubRequest {
  rid: AccessSubRequestRid;
  editSubRequestDetails: EditAccessSubRequestDetails;
}
