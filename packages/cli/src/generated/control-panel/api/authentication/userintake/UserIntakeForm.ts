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

import type { UserIntakeFormSection } from "./UserIntakeFormSection.js";
import type { Version } from "./Version.js";

/**
 * User intake form configuration. The version is managed by the Multipass backend and it increases with every
 * call to UserIntakeFormService#putUserIntakeForm.
 */
export interface UserIntakeForm {
  version: Version;
  sections: Array<UserIntakeFormSection>;
}
