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

import type { AllPrincipalsWithRoleOnResource } from "./AllPrincipalsWithRoleOnResource.js";

/**
 * A response object returned by the getAllPrincipalsWithRoleOnResources endpoint.
 *
 * A map from a resource to all the visible principals that have a role on the resource. This includes
 * principals who have an direct role grant on the resouce and also all principals who have a role grant
 * indirectly via group membership.
 */
export interface GetAllPrincipalsWithRoleOnResourcesResult {
  allPrincipalsWithRoleByResource: Record<
    string,
    AllPrincipalsWithRoleOnResource
  >;
}
