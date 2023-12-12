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

import type { PrincipalId } from "../../PrincipalId.js";
import type { UserInfo } from "./UserInfo.js";
export interface TestUser_userId {
  type: "userId";
  userId: PrincipalId;
}

export interface TestUser_userInfo {
  type: "userInfo";
  userInfo: UserInfo;
}
/**
 * Object representing a user to run rules against.
 *
 * Can either be the Multipass `userId` of an existing user, or a `userInfo` object representing the
 * set of attributes, groups, and internal groups a user could have.
 */
export type TestUser = TestUser_userId | TestUser_userInfo;
