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

import type { Attribution } from "../../../Attribution.js";
import type { PrincipalId } from "../../../PrincipalId.js";
import type { ProviderAttributes } from "./ProviderAttributes.js";
import type { TestLoginAuthenticationResult } from "./TestLoginAuthenticationResult.js";
export interface TestLogin {
  name: string;
  createdAt: Attribution;
  updatedAt: Attribution | undefined;
  providerAttributes: ProviderAttributes | undefined;
  attributes: Record<string, Array<string>> | undefined;
  userId: PrincipalId | undefined;
  result: TestLoginAuthenticationResult | undefined;
}
