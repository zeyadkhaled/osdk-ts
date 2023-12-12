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

import type { AttributeSelectInput } from "./AttributeSelectInput.js";
import type { AttributeTextInput } from "./AttributeTextInput.js";
import type { SelectInput } from "./SelectInput.js";
import type { TextInput } from "./TextInput.js";
export interface Input_attributeSelect {
  type: "attributeSelect";
  attributeSelect: AttributeSelectInput;
}

export interface Input_select {
  type: "select";
  select: SelectInput;
}

export interface Input_attributeText {
  type: "attributeText";
  attributeText: AttributeTextInput;
}

export interface Input_text {
  type: "text";
  text: TextInput;
}
/**
 * A form element.
 */
export type Input =
  | Input_attributeSelect
  | Input_select
  | Input_attributeText
  | Input_text;
