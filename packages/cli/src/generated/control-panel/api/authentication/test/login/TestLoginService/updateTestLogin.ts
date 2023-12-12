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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type { UpdateTestLoginRequest } from "../UpdateTestLoginRequest.js";

/**
 * Updates the test login with the given ID. This endpoint should only be called by Multipass and requires the
 * caller to have the control-panel:test-login:update operation on the Control Panel root. This endpoint may be
 * called multiple times during a login flow for a given test, to set different pieces of metadata related to the
 * login process.
 */
export async function updateTestLogin(
  ctx: ConjureContext,
  testId: string,
  request: UpdateTestLoginRequest,
): Promise<void> {
  return conjureFetch(ctx, `/test-login/test/${testId}`, "PUT", request);
}
