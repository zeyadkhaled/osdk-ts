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

import type { AcknowledgementPutUserIntakeConfigurationRequestInput } from "./AcknowledgementPutUserIntakeConfigurationRequestInput.js";
import type { AttributeDatePutUserIntakeConfigurationRequestInput } from "./AttributeDatePutUserIntakeConfigurationRequestInput.js";
import type { AttributeMultiSelectPutUserIntakeConfigurationRequestInput } from "./AttributeMultiSelectPutUserIntakeConfigurationRequestInput.js";
import type { AttributeSelectPutUserIntakeConfigurationRequestInput } from "./AttributeSelectPutUserIntakeConfigurationRequestInput.js";
import type { AttributeTextPutUserIntakeConfigurationRequestInput } from "./AttributeTextPutUserIntakeConfigurationRequestInput.js";
import type { DatePutUserIntakeConfigurationRequestInput } from "./DatePutUserIntakeConfigurationRequestInput.js";
import type { FilePutUserIntakeConfigurationRequestInput } from "./FilePutUserIntakeConfigurationRequestInput.js";
import type { MultiSelectPutUserIntakeConfigurationRequestInput } from "./MultiSelectPutUserIntakeConfigurationRequestInput.js";
import type { SelectPutUserIntakeConfigurationRequestInput } from "./SelectPutUserIntakeConfigurationRequestInput.js";
import type { TextPutUserIntakeConfigurationRequestInput } from "./TextPutUserIntakeConfigurationRequestInput.js";
export interface PutUserIntakeConfigurationRequestInput_attributeSelect {
  type: "attributeSelect";
  attributeSelect: AttributeSelectPutUserIntakeConfigurationRequestInput;
}

export interface PutUserIntakeConfigurationRequestInput_select {
  type: "select";
  select: SelectPutUserIntakeConfigurationRequestInput;
}

export interface PutUserIntakeConfigurationRequestInput_attributeText {
  type: "attributeText";
  attributeText: AttributeTextPutUserIntakeConfigurationRequestInput;
}

export interface PutUserIntakeConfigurationRequestInput_text {
  type: "text";
  text: TextPutUserIntakeConfigurationRequestInput;
}

export interface PutUserIntakeConfigurationRequestInput_acknowledgement {
  type: "acknowledgement";
  acknowledgement: AcknowledgementPutUserIntakeConfigurationRequestInput;
}

export interface PutUserIntakeConfigurationRequestInput_file {
  type: "file";
  file: FilePutUserIntakeConfigurationRequestInput;
}

export interface PutUserIntakeConfigurationRequestInput_attributeDate {
  type: "attributeDate";
  attributeDate: AttributeDatePutUserIntakeConfigurationRequestInput;
}

export interface PutUserIntakeConfigurationRequestInput_date {
  type: "date";
  date: DatePutUserIntakeConfigurationRequestInput;
}

export interface PutUserIntakeConfigurationRequestInput_attributeMultiSelect {
  type: "attributeMultiSelect";
  attributeMultiSelect:
    AttributeMultiSelectPutUserIntakeConfigurationRequestInput;
}

export interface PutUserIntakeConfigurationRequestInput_multiSelect {
  type: "multiSelect";
  multiSelect: MultiSelectPutUserIntakeConfigurationRequestInput;
}
/**
 * The configuration requests for an input field on a user intake form.
 */
export type PutUserIntakeConfigurationRequestInput =
  | PutUserIntakeConfigurationRequestInput_attributeSelect
  | PutUserIntakeConfigurationRequestInput_select
  | PutUserIntakeConfigurationRequestInput_attributeText
  | PutUserIntakeConfigurationRequestInput_text
  | PutUserIntakeConfigurationRequestInput_acknowledgement
  | PutUserIntakeConfigurationRequestInput_file
  | PutUserIntakeConfigurationRequestInput_attributeDate
  | PutUserIntakeConfigurationRequestInput_date
  | PutUserIntakeConfigurationRequestInput_attributeMultiSelect
  | PutUserIntakeConfigurationRequestInput_multiSelect;
