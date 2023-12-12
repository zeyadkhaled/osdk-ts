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
 * The limit was set by Mainframe for the reason indicated by the enum value. See documentation for each value in
 * `com.palantir.mainframe.api.EnrollmentLimitUpdate`.
 */
export type MainframeEnrollmentLimitRationale =
  | "PALANTIR_MANAGED_ONBOARDING_WITHOUT_EXTERNAL_INGRESS"
  | "FOUNDRY_BASIC_ENTITLEMENT"
  | "TRIAL_WITH_SELF_SERVICE_USER_DIRECTORY"
  | "OTHER";
