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

import type { DefaultValueEnrollmentLimitRationale } from "./DefaultValueEnrollmentLimitRationale.js";
import type { MainframeEnrollmentLimitRationale } from "./MainframeEnrollmentLimitRationale.js";
import type { UnspecifiedEnrollmentLimitRationale } from "./UnspecifiedEnrollmentLimitRationale.js";
export interface EnrollmentLimitRationale_defaultValue {
  type: "defaultValue";
  defaultValue: DefaultValueEnrollmentLimitRationale;
}

export interface EnrollmentLimitRationale_unspecified {
  type: "unspecified";
  unspecified: UnspecifiedEnrollmentLimitRationale;
}

export interface EnrollmentLimitRationale_mainframe {
  type: "mainframe";
  mainframe: MainframeEnrollmentLimitRationale;
}
export type EnrollmentLimitRationale =
  | EnrollmentLimitRationale_defaultValue
  | EnrollmentLimitRationale_unspecified
  | EnrollmentLimitRationale_mainframe;
