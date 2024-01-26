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

import path from "node:path";
import type { MinimalFs } from "../MinimalFs";
import { formatTs } from "../util/test/formatTs";
import type { WireOntologyDefinition } from "../WireOntologyDefinition";

export async function generateObjectsInterfaceFile(
  ontology: WireOntologyDefinition,
  fs: MinimalFs,
  outDir: string,
  importExt: string = "",
) {
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(
    path.join(outDir, "Objects.ts"),
    await formatTs(`
    import { BaseObjectSet } from "@osdk/legacy-client";
    ${
      Array.from(Object.keys(ontology.objectTypes)).map(importedObject =>
        `import type { ${importedObject} } from "./${importedObject}${importExt}";`
      ).join("\n")
    }
    
    export interface Objects {
      ${
      Object.keys(ontology.objectTypes).map((apiName) =>
        `${apiName} : BaseObjectSet<${apiName}>;`
      ).join("\n")
    }
    }
    ;`),
  );
}
