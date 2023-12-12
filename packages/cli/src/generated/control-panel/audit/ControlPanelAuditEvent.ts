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

export type ControlPanelAuditEvent =
  | "CREATE_ENROLLMENT"
  | "UPDATE_ENROLLMENT"
  | "ASSIGN_ORGANIZATION_TO_ENROLLMENT"
  | "REMOVE_ORGANIZATION_FROM_ENROLLMENT"
  | "MOVE_ORGANIZATIONS_AND_HOSTS"
  | "CREATE_ORGANIZATION_IN_ENROLLMENT"
  | "CREATE_ORGANIZATION_IN_ENROLLMENT_FOR_PALANTIR_SUPPORT"
  | "CREATE_PRIVATE_NAMESPACE_FOR_ORGANIZATION"
  | "CREATE_APOLLO_SPACE_FOR_ORGANIZATION"
  | "CREATE_INTERNAL_GROUP_WITH_ADMINISTRATIVE_PERMISSIONS"
  | "GET_ALL_ENROLLMENTS_DEPRECATED"
  | "GET_ENROLLMENT_DEPRECATED"
  | "GET_ENROLLMENT_FOR_ORGANIZATION"
  | "GET_ALL_ENROLLMENT_RIDS"
  | "GET_ALL_ENROLLMENT_INFOS"
  | "GET_ENROLLMENT_INFOS"
  | "GET_ENROLLMENT_HOSTS"
  | "UPDATE_ENROLLMENT_HOSTS"
  | "RESTORE_ENROLLMENT_PERMISSIONS"
  | "RESTORE_ORGANIZATION_PERMISSIONS"
  | "RESTORE_APOLLO_PERMISSIONS"
  | "REGISTER_ENROLLMENT_FOR_DELETION"
  | "UNREGISTER_ENROLLMENT_FOR_DELETION"
  | "GET_ENROLLMENT_CREATION_SETTINGS"
  | "GET_ENROLLMENT_ROLE_GRANTS"
  | "UPDATE_ENROLLMENT_ROLE_GRANTS"
  | "GET_ENROLLMENT_INGRESS_CONFIGURATION"
  | "PATCH_DOMAIN_INGRESS_CONFIGURATION"
  | "CREATE_INGRESS_PATCH"
  | "UPDATE_INGRESS_PATCH"
  | "GET_PENDING_INGRESS_PATCH_RIDS"
  | "GET_INGRESS_PATCHES"
  | "SET_PALANTIR_ACCESS"
  | "SET_CONTRIBUTORS_CAN_APPROVE"
  | "START_INGRESS_MIGRATION"
  | "COMPLETE_INGRESS_MIGRATION"
  | "REVERT_INGRESS_MIGRATION"
  | "ENROLLMENT_INGRESS_CONFIGURATION_HAS_DENIED_CIDRS_OR_COUNTRIES"
  | "INVOKE_APPROVED_INGRESS_PATCH"
  | "PUT_USER_RULES"
  | "DELETE_USER_RULES"
  | "GET_USER_RULES"
  | "PUT_GROUP_RULES"
  | "DELETE_GROUP_RULES"
  | "GET_GROUP_RULES"
  | "TEST_USER_TRIAGING";
