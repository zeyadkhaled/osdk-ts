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
 * Public projects, created with isPrivate = false, have public contents viewable to everyone (subject to mandatory controls), and all other permissions are inherited from the namespace.
 * Private projects have private contents only accessible to users explicitly granted permissions, but are discoverable to everyone (subject to mandatory controls).
 * User projects, which are automatically created by Compass, are not discoverable and not returned in some Compass endpoints.
 */
export type ProjectType = "PUBLIC" | "PRIVATE" | "USER_FOLDER";
