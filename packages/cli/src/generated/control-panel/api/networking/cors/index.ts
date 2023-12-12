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

export * as CorsConfigurationService from "./CorsConfigurationService.js";

export type { AllowedOrigin } from "./AllowedOrigin.js";
export type { AttributedAllowedOrigin } from "./AttributedAllowedOrigin.js";
export type { CorsConfiguration } from "./CorsConfiguration.js";
export type { CorsConfigurationIsAvailableResponse } from "./CorsConfigurationIsAvailableResponse.js";
export type { DomainCorsConfigurationPatch } from "./DomainCorsConfigurationPatch.js";
export type { GetCorsConfigurationsForEnrollmentResponse } from "./GetCorsConfigurationsForEnrollmentResponse.js";
export type { PatchCorsConfigurationForDomainRequest } from "./PatchCorsConfigurationForDomainRequest.js";
