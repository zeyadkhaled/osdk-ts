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
import type { PutAutosaveResourceRequest } from "../../PutAutosaveResourceRequest.js";
import type { Resource } from "../../Resource.js";

/**
 * Creates an autosave resource from the given request. The resource being created must already exist in Gatekeeper
 * under the given resource request autosaveLocationRid. The resource being created must not be a service project
 * or a service project resource. Does not allow for the creation of hidden resources.
 *
 * For backcompat reasons, the new Compass resource will have it's "is-autosave" field
 * set to true only if the "projectCentricAutosaveEnabled" feature flag is enabled.
 *
 * Throws the following errors:
 *
 * ForbiddenOperationOnServiceProjectResources
 * if the resource or resourceRequest's `autosaveLocationRid` are service projects or service project resources.
 *
 * CANNOT_PUT_FOLDER_IN_AUTOSAVE_LOCATION
 * if the passed in rid is a folder (since folders cannot be autosave resources)
 *
 * DUPLICATE_NAME
 * if a resource with the same name already exists in the containing folder
 *
 * ILLEGAL_NAME
 * if `name` is invalid (see docs for `name` field for more details)
 *
 * RESOURCE_NOT_UNDER_PARENT
 * if the Resource did not have the correct parent in Gatekeeper
 *
 * NOT_FOUND
 * if the resource associated with resourceRequest's `autosaveLocationRid` does not exist in Compass
 *
 * NEW_RESOURCE_PARENT_MUST_BE_FOLDER
 * if the specified `autosaveLocationRid` is not a folder
 *
 * CANNOT_PUT_AUTOSAVE_UNDER_HIDDEN_RESOURCE
 * if the specified `autosaveLocationRid` represents a hidden resource
 *
 * CANNOT_CHANGE_PARENT_WITHOUT_SETTING_ALLOW_UPDATING_PARENT
 * if `parentRid` was provided and the resource already exists in Compass with a different parent RID, but `PutResourceOption.ALLOW_UPDATING_PARENT` was not specified
 */
export async function putAutosaveResource(
  ctx: ConjureContext,
  rid: string,
  resourceRequest: PutAutosaveResourceRequest,
): Promise<Resource> {
  return conjureFetch(ctx, `/autosaves/${rid}`, "PUT", resourceRequest);
}
