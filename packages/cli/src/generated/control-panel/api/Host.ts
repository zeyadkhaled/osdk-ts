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
 * Conceptually, a host represents the top level domain that users of an enrollment use to access their Foundry
 * instance: `myfoundry.palantircloud.com` is a canonical example.
 *
 * Control Panel will accept various shapes of "hosts", including raw IPs, and including the optional presence
 * of a port. Users of this data are advised to perform normalization if string comparisons are used on it. The
 * following are examples of "hosts" that are all accepted by Control Panel:
 * - myfoundry.palantircloud.com
 * - MYFOUNDRY.PALANTIRCLOUD.COM
 * - myfoundry.palantir.internal:12345
 * - 12.34.56.78
 * - 12.34.56.78:12345
 * - [fe80:0:0:0:213:72ff:fe3c:21bf]
 * - [fe80:0:0:0:213:72ff:fe3c:21bf]:12345
 *
 * Conversely, the following are not legal hosts and will not be accepted by Control Panel:
 * - https://myfoundry.palantircloud.com
 * - myfoundry.palantircloud.com/
 *
 * Hosts play a part in various Control Panel workflows:
 *
 * - Multiple hosts can be associated to an enrollment. Most enrollments will have only one host.
 * - Organizations must be associated to hosts belonging to their enrollment. Authenticated incoming requests
 * (with a Multipass JWT token) will only be let through the Rubix front door if the host being accessed is
 * part of the hosts that correspond to the organization encoded in the Multipass JWT token.
 * - A host can be associated to authentication providers (see `SamlAuthenticationProvider#getSupportedHosts()`),
 * which determines if an authentication provider is displayed for users logging into Foundry through that
 * host.
 * - Various settings, stored by Multipass, can be set for them (see `EnrollmentHostSettingsService`), to
 * customize the login experience.
 * - Ingress allowlisting rules can be set for hosts (see `IngressService`, where they are referred to as
 * domains), but only when they are actually domains (e.g. raw IPs are not supported there).
 */
export type Host = string;
