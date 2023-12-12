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

/**
 * Async User Managers that can be set on authentication providers that exist in Control Panel.
 */
export type AsyncUserManager =
  | "USER_INTAKE"
  | "ALLOW_LIST"
  | "TWO_FA"
  | "GROUP"
  | "ARBITER"
  | "FOUNDRY_BACKED"
  | "EULA"
  | "CHECKPOINTS_LOGIN"
  | "SHORTSTOP_POLICY_SERVER"
  | "AURA";
