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
 * Rationales for why these limits exist and how default values get picked is described in
 * `com.palantir.controlpanel.limits.InternalLimitType`.
 */
export type LimitType =
  | "NUM_ORGANIZATIONS"
  | "NUM_INGRESS_CIDRS_PER_DOMAIN"
  | "NUM_INGRESS_COUNTRIES_PER_DOMAIN"
  | "NUM_AUTHENTICATION_PROVIDERS";
