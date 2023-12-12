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

import type { AttributeMatchType } from "./AttributeMatchType.js";

/**
 * If `matchType` is ONLY, the attribute named `attributeName` should have a single value which should match the
 * pattern `attributeValuePattern` to satisfy the condition.
 *
 * If `matchType` is ANY, at least one of the values for the attribute named `attributeName` should match the
 * pattern `attributeValuePattern` to satisfy the condition.
 *
 * If `matchType` is NONE, none of the values for the attribute named `attributeName` should match the pattern
 * `attributeValuePattern` to satisfy the condition.
 */
export interface AttributeUserCondition {
  attributeName: string;
  attributeValuePattern: string;
  matchType: AttributeMatchType;
}
