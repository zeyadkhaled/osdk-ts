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
import type { EnrollmentRid } from "../../EnrollmentRid.js";

/**
 * Should only be used under the guidance of the product team. Use this if the enrollment state machine got
 * stuck while waiting for the Compass namespace creation.
 *
 * Returns `true` when successful.
 */
export async function sendNamespaceCreatedEventToEnrollmentStateMachine(
  ctx: ConjureContext,
  enrollmentRid: EnrollmentRid,
  namespaceRid: string,
): Promise<boolean> {
  return conjureFetch(
    ctx,
    `/debug/enrollment/${enrollmentRid}/namespace/${namespaceRid}`,
    "PUT",
  );
}
