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

import type { EnrollmentRid } from "./EnrollmentRid.js";
import type { Host } from "./Host.js";
import type { OrganizationRid } from "./OrganizationRid.js";
import type { Principal } from "./Principal.js";

/**
 * A Control Panel enrollment (previously referred to as `customer`), with fields describing it managed by
 * environment administrators.
 *
 * Usage of this type, via the `getAllEnrollmentsDeprecated` and `getEnrollmentDeprecated`, is deprecated. Switch
 * to other endpoints suggested in the documentation of these deprecated endpoints.
 */
export interface DeprecatedEnrollment {
  name: string;
  rid: EnrollmentRid;
  bootstrapPrincipals: Array<Principal>;
  externalUris: Array<Host>;
  defaultFoundryHost: Host;
  customersOrgs: Array<OrganizationRid>;
  creationTime: string | undefined;
  deletionContextRid: string | undefined;
}
