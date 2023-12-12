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
 * An allowed origin for the purpose of Cross Origin Resource Sharing (CORS) configuration.
 *
 * Such an origin must start with a `https://` scheme. A wildcard is optionally supported after the scheme.
 * Following the optional wildcard, the allowed origin must be a domain name with at least two parts, and without
 * a port. Example legal values:
 *
 * - https://example.com
 * - https://*.example.com
 */
export type AllowedOrigin = string;
