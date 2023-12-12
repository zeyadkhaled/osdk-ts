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
import type { EnrollmentRid } from "./EnrollmentRid.js";
import type { OrganizationInfo } from "./OrganizationInfo.js";

/**
 * General info about the setup flow that will happen through a setup link. All information here is provided
 * without access to a valid Multipass token, just a setup token and password, add fields with care.
 */
export interface EnrollmentSetupInfo {
  enrollmentRid: EnrollmentRid;
  enrollmentName: string;
  organizationInfo: OrganizationInfo;
  administratorGrants: Array<AdministratorType>;
  linkTimeToLiveSeconds: number;
  expirationTime: string;
}
