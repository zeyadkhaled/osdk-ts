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

import type { TestLoginAuthenticationFailure } from "./TestLoginAuthenticationFailure.js";
import type { TestLoginAuthenticationSuccess } from "./TestLoginAuthenticationSuccess.js";
export interface TestLoginAuthenticationResult_success {
  type: "success";
  success: TestLoginAuthenticationSuccess;
}

export interface TestLoginAuthenticationResult_failure {
  type: "failure";
  failure: TestLoginAuthenticationFailure;
}
export type TestLoginAuthenticationResult =
  | TestLoginAuthenticationResult_success
  | TestLoginAuthenticationResult_failure;
