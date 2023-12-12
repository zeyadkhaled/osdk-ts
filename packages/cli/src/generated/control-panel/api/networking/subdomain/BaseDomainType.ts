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
 * Describes how a base domain (see `BaseDomainInfo`) is currently handled by Control Panel, informing how
 * subdomain registration will work and what is supported.
 */
export type BaseDomainType =
  | "DOES_NOT_SUPPORT_SUBDOMAIN_REGISTRATION"
  | "MANAGED_EXTERNALLY"
  | "MANAGED_BY_CONTROL_PANEL";
