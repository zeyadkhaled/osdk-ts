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

import type { AdministratorType } from "./AdministratorType.js";
import type { AuthenticationProviderRid } from "./AuthenticationProviderRid.js";
import type { EnrollmentSetupContextId } from "./EnrollmentSetupContextId.js";
import type { EnrollmentSetupLinkInfo } from "./EnrollmentSetupLinkInfo.js";
import type { OrganizationRid } from "./OrganizationRid.js";
export interface EnrollmentSetupContextInfo {
  id: EnrollmentSetupContextId;
  name: string;
  samlRid: AuthenticationProviderRid | undefined;
  organizationRid: OrganizationRid;
  administratorGrants: Array<AdministratorType>;
  linkInfo: EnrollmentSetupLinkInfo | undefined;
  createdByMainframe: boolean;
}
