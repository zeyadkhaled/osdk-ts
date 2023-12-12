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

import type { CommandModule } from "yargs";
import type { CommonOntologyArgs } from "../CommonOntologyArgs.js";
import type { InitializeOntology } from "./LoginArgs.js";

export const command: CommandModule<
  CommonOntologyArgs,
  InitializeOntology
> = {
  command: "init",
  describe: "Initialize your ontology",
  builder: (argv) => {
    return argv
      // TODO: This would be either a token, or a 3PA client ID with the right permissions
      .option("applicationId", {
        type: "string",
        demandOption: true,
      });
  },
  handler: async (args) => {
    const command = await import("./initializeOntology.js");
    await command.default(args);
  },
};

export default command;
