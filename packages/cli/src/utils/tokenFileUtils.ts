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

import * as fs from "node:fs";
import * as path from "node:path";

/**
 * Synchronously reads a JWT Auth Token from a file.
 * @param filePath The path to the token file.
 * @returns The token as a string.
 */
export function loadToken(filePath: string): string {
  const resolvedPath = path.resolve(filePath);
  const token = fs.readFileSync(resolvedPath, "utf8").trim();

  if (!isJWT(token)) {
    throw new Error(`Token file ${resolvedPath} does not contain a valid JWT`);
  }

  return token;
}

/**
 * Checks if a given string is a JWT.
 * @param token The string to check.
 * @returns true if the string is a JWT, false otherwise.
 */
function isJWT(token: string): boolean {
  // https://stackoverflow.com/a/65755789
  const jwtPattern = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  return jwtPattern.test(token);
}
