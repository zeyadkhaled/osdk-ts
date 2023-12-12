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

export * as CompassAliasService from "./CompassAliasService.js";

export type { ActionType } from "./ActionType.js";
export type { Attribution } from "./Attribution.js";
export type { BatchGetAncestorsRequest } from "./BatchGetAncestorsRequest.js";
export type { BatchGetAncestorsResponse } from "./BatchGetAncestorsResponse.js";
export type { BatchGetChildrenByNameResponse } from "./BatchGetChildrenByNameResponse.js";
export type { BranchName } from "./BranchName.js";
export type { ChildNameAndParentRid } from "./ChildNameAndParentRid.js";
export type { Classification } from "./Classification.js";
export type { ClassificationBanner } from "./ClassificationBanner.js";
export type { CreateResourceFromOption } from "./CreateResourceFromOption.js";
export type { CreateResourceFromRequest } from "./CreateResourceFromRequest.js";
export type { DecoratedResource } from "./DecoratedResource.js";
export type { DecoratedResourcesPage } from "./DecoratedResourcesPage.js";
export type { DeprecatedImportedResource } from "./DeprecatedImportedResource.js";
export type { Deprecation } from "./Deprecation.js";
export type { DeprecationRequest } from "./DeprecationRequest.js";
export type { FavoritesMigrated } from "./FavoritesMigrated.js";
export type { FindSharedUserResourcesResponse } from "./FindSharedUserResourcesResponse.js";
export type { GetBranchesForResourceBranchesPage } from "./GetBranchesForResourceBranchesPage.js";
export type { GetBranchesForResourceQuery } from "./GetBranchesForResourceQuery.js";
export type { GetBranchesForResourcesRequest } from "./GetBranchesForResourcesRequest.js";
export type { GetBranchesForResourcesResponse } from "./GetBranchesForResourcesResponse.js";
export type { HomeFolderMetadata } from "./HomeFolderMetadata.js";
export type { NamedResourceIdentifier } from "./NamedResourceIdentifier.js";
export type { PatchOperation } from "./PatchOperation.js";
export type { PostResourceRequest } from "./PostResourceRequest.js";
export type { PrincipalId } from "./PrincipalId.js";
export type { PutAutosaveResourceRequest } from "./PutAutosaveResourceRequest.js";
export type { PutResourceOption } from "./PutResourceOption.js";
export type { PutResourceRequest } from "./PutResourceRequest.js";
export type { Resource } from "./Resource.js";
export type { ResourceRidsPage } from "./ResourceRidsPage.js";
export type { StatementPatch } from "./StatementPatch.js";
export type { TimestampedResourceIdentifier } from "./TimestampedResourceIdentifier.js";
export type { UpdateHomeProjectMarkingsRequest } from "./UpdateHomeProjectMarkingsRequest.js";
export type { UpdateHomeProjectMarkingsResponse } from "./UpdateHomeProjectMarkingsResponse.js";

export * as admin from "./admin/index.js";
export * as branches from "./branches/index.js";
export * as collections from "./collections/index.js";
export * as constraint from "./constraint/index.js";
export * as contacts from "./contacts/index.js";
export * as delete from "./delete/index.js";
export * as groups from "./groups/index.js";
export * as importresource from "./importresource/index.js";
export * as linkeditems from "./linkeditems/index.js";
export * as location from "./location/index.js";
export * as marking from "./marking/index.js";
export * as ontology from "./ontology/index.js";
export * as pams from "./pams/index.js";
export * as project from "./project/index.js";
export * as publication from "./publication/index.js";
export * as registry from "./registry/index.js";
export * as request from "./request/index.js";
export * as response from "./response/index.js";
export * as share from "./share/index.js";
export * as tags from "./tags/index.js";
export * as template from "./template/index.js";
export * as typeclass from "./typeclass/index.js";
export * as user from "./user/index.js";
