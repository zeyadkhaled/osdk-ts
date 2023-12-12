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

import type { AttributeSelectInputValue } from "./AttributeSelectInputValue.js";
import type { InputId } from "./InputId.js";

/**
 * The configuration for an attribute multiselect dropdown input field on a user intake form. On form approval,
 * the attribute values associated with the selected options will be assigned to the specified attribute
 * name for the user.
 */
export interface AttributeMultiSelectInput {
  id: InputId;
  prompt: string;
  description: string | undefined;
  attributeName: string;
  values: Array<AttributeSelectInputValue>;
  required: boolean;
}
