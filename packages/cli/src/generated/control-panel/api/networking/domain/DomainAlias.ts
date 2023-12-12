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
 * An SLS domain alias (see the definition of domain-aliases in
 * https://github.palantir.build/deployability/sls-spec/blob/c2de835e03d0527693093e91c42f5ede1d049df9/docs/endpoints.md#adding-ingress-configuration)
 * that can be associated with a domain.
 *
 * Domain alias values are restricted to the following format `[a-zA-Z0-9_]+`.
 */
export type DomainAlias = string;
