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
 * The Control Panel RID of an authentication provider. Always corresponds to a single realm in Multipass
 * (although not all realms in Multipass are tied to a Control Panel authentication provider: examples here
 * include the Internal Realm, or providers managed in Multipass configuration). Control Panel tracks the mapping
 * between provider RIDs and realms (which are independently generated, on creation) in its store.
 *
 * The RID type may vary based on the authentication provider type (e.g. `saml` or `oidc`).
 *
 * The locator portion of such a RID cannot be assumed to always be a UUID. Notably, SAML providers that were
 * created via Multipass configuration and then migrated to Control Panel have a RID of the shape
 * `ri.control-panel.<INSTANCE>.saml.<name-of-saml-collector-in-config>`.
 */
export type AuthenticationProviderRid = string;
