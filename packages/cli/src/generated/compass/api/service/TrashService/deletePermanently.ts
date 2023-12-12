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
import type { DeleteOption } from "../../delete/DeleteOption.js";
import type { DeleteResult } from "../../delete/DeleteResult.js";

/**
 * Permanently delete the resources with the specified rids.
 *
 * Can operate on both service project resources and non service project resources resources.
 *
 * Autosave or hidden resources do not require trashing and can always be deleted. Resources that are not
 * autosaved or hidden must be directly trashed before they are deleted,
 * unless the DO_NOT_REQUIRE_TRASHED DeleteOption is set.
 *
 * Resources to delete can be resources, folders, projects, and/or namespaces. If the resources are folders, projects, or
 * namespaces, then ALL children of the resources will be deleted.
 *
 * If the RID of any resource matches an external Compass deleter (e.g. Monocle implements a deleter for all RIDs of the form
 * "ri.monocle.[instance].graph"), then that deleter will be called (e.g. Monocle will delete the object from its graph). The
 * deleters are configured in getDeletersRegistry().
 *
 * Returns:
 *
 * For each resource with one of the specified rids or child of a resource with one of the specified rids, whether the
 * delete result was DeleteResultCode.SUCCESS, DeleteResultCode.FAILURE, or the resource was
 * DeleteResultCode.NOT_FOUND. This result is specified by the external Compass deleter, except in the case
 * when the resource can not be found, in which case the result will be DeleteResultCode.NOT_FOUND, and
 * when the Compass deleter cannot be found, in which case the result will be DeleteResultCode.SUCCESS
 * (and the resource will be deleted from the Compass store).
 *
 * Throws the following errors:
 *
 * ForbiddenOperationOnServiceProjectResources
 * if the rid or resourceRequest's parentId are service project resources and the AuthHeader does not have compass:write-service-project.
 * BadRequestException
 * if any of the specified resources are not directly trashed
 * ForbiddenException
 * if the user does not have compass:delete on any of the resources, or any of the child resources (if the resources
 * are folders/projects/namespaces)
 */
export async function deletePermanently(
  ctx: ConjureContext,
  userBearerToken: string | undefined,
  deleteOptions: Array<DeleteOption>,
  rids: Array<string>,
): Promise<Array<DeleteResult>> {
  return conjureFetch(
    ctx,
    `/trash/delete?${new URLSearchParams({
      "deleteOptions": deleteOptions.join(","),
    })}`,
    "POST",
    rids,
  );
}
