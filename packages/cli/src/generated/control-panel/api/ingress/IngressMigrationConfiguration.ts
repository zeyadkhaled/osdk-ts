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

import type { Cidr } from "./Cidr.js";
import type { CountryCode } from "./CountryCode.js";

/**
 * Object that describes how ingress allowlist configuration will be migrated from the Network infrastructure's
 * global fallback config (derived from `security.yml`), to allowlist configuration stored in Control Panel.
 * The migration configuration is independent of domains.
 */
export interface IngressMigrationConfiguration {
  cidrsToMigrate: Array<Cidr>;
  countriesToMigrate: Array<CountryCode>;
  palantirAccessEnabled: boolean;
}
