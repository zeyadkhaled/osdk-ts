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
import type { CreateEnrollmentRequest } from "../CreateEnrollmentRequest.js";
import type { CreateEnrollmentResponse } from "../CreateEnrollmentResponse.js";

/**
 * Creates a new enrollment, with no organizations.
 *
 * Initial enrollment administrators must be set in the request.
 *
 * At creation time, an enrollment must have a host set, which represents the top-level domain (e.g.
 * myfoundry.palantircloud.com) used by organization members belonging to the enrollment to access their Foundry
 * instance.
 *
 * The enrollment will be registered with Resource Policy Manager to create initial usage accounts and resource
 * queues, if Resource Policy Manager is available on the environment.
 *
 * Requires the `control-panel:environment:administer` operation on `ri.control-panel..resource.root`.
 */
export async function createEnrollment(
  ctx: ConjureContext,
  request: CreateEnrollmentRequest,
): Promise<CreateEnrollmentResponse> {
  return conjureFetch(ctx, `/admin/enrollment/create`, "POST", request);
}
