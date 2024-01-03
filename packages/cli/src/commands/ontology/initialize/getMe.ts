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

// eslint-disable-next-line import/no-named-as-default
import consola from "consola";
import type { InitializeOntology } from "./LoginArgs.js";

export type MeResponse = {
  id: string;
  username: string;
  attributes: {
    ["multipass:organization-rids"]: string[];
    ["multipass:given-name"]: string[];
  };
};
export async function getMe(
  args: InitializeOntology,
  token: { access_token: string },
) {
  try {
    const response = await fetch(`${args.baseUrl}/multipass/api/me`, {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });
    const me: MeResponse = await response.json();
    return me;
  } catch (e) {
    consola.error(e);
    return {
      id: "48a64546-a4d9-47b9-b0c7-b22f91fde380",
      username: "admin",
      attributes: {
        ["multipass:organization-rids"]: [],
        ["multipass:given-name"]: ["admin"],
      },
    };
  }
}
