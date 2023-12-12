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

/**
 * An Internet addressable domain name used to access Foundry. Ingress allowlist rules, CORS configuration can be
 * set for these in Control Panel. In practice, this a subtype of the `Host` type above: all valid
 * InternetDomainNames are valid Hosts, but the converse (such as when a host has an explicit port, or is a raw
 * IP), is not true. For ingress purposes, the port is assumed to be the default HTTPS port (443).
 *
 * Validation of an InternetDomainName is only based on syntax, not DNS checks.
 *
 * The following is a valid InternetDomainName :
 * - myfoundry.palantirfoundry.com
 *
 * Conversely, the following are not valid:
 * - https://myfoundry.palantircloud.com
 * - myfoundry.palantircloud.com/
 * - myfoundry.palantircloud.com:443
 * - 12.34.56.78
 */
export type InternetDomainName = string;
