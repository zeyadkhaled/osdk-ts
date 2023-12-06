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

// EATODO: move types related to the 'thick' ontology definition to
// its own package, maybe `@osdk/api.ontology-full`
// and the ones we ship to `@osdk/api.ontology`?

import type * as GeoJSON from "geojson";
import type { ActionDefinition } from "./ActionDefinition";
import type { OntologyMetadata } from "./OntologyMetadata";
import type { QueryDefinition } from "./QueryDefinition";

export type ObjectInfoFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = O["objects"][K];

export type ObjectTypesFrom<O extends OntologyDefinition<string>> =
  keyof O["objects"];

export type ObjectPropertyKeysFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = keyof ObjectInfoFrom<O, K>["properties"];

export type ObjectPropertyDefinitionsFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = ObjectInfoFrom<O, K>["properties"];

export type ObjectPropertyDefinitionFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
  P extends ObjectPropertyKeysFrom<O, K>,
> = ObjectPropertyDefinitionsFrom<O, K>[P];

export type InterfaceInfoFrom<
  O extends OntologyDefinition<any>,
  K extends InterfaceNamesFrom<O>,
> = O["interfaces"] extends {} ? O["interfaces"][K] : never;

export type InterfaceNamesFrom<O extends OntologyDefinition<string>> =
  keyof O["interfaces"];

export type InterfacePropertyKeysFrom<
  O extends OntologyDefinition<any>,
  K extends InterfaceNamesFrom<O>,
> = keyof InterfaceInfoFrom<O, K>["properties"];

export type InterfacePropertyDefinitionsFrom<
  O extends OntologyDefinition<any>,
  K extends InterfaceNamesFrom<O>,
> = InterfaceInfoFrom<O, K>["properties"];

export type InterfacePropertyDefinitionFrom<
  O extends OntologyDefinition<any>,
  K extends InterfaceNamesFrom<O>,
  P extends InterfacePropertyKeysFrom<O, K>,
> = InterfacePropertyDefinitionsFrom<O, K>[P];

export interface OntologyDefinition<
  K extends string,
  A extends string = any,
  Q extends string = any,
  I extends string = any,
> {
  metadata: OntologyMetadata;
  objects: {
    [KK in K]: ObjectDefinition<KK, K>;
  };
  actions: {
    [AA in A]: ActionDefinition<AA, K>;
  };
  queries: {
    [QQ in Q]: QueryDefinition<QQ, K>;
  };
  interfaces?: {
    [II in I]: InterfaceDefinition<II, K>;
  };
}

export interface ObjectDefinition<
  K extends string,
  L extends string,
> {
  apiName: K;
  description?: string;
  primaryKeyType: keyof WirePropertyTypes;
  properties: Record<string, PropertyDefinition>;
  links: Record<string, LinkDefinition<L>>;
}

export interface InterfaceDefinition<
  K extends string,
  _L extends string, // future for links
> {
  apiName: K;
  description?: string;
  properties: Record<string, PropertyDefinition>;
}

export type LinkKeysFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = keyof ObjectInfoFrom<O, K>["links"];

export interface LinkDefinition<K extends string> {
  targetType: K;
  multiplicity: boolean;
}

export type LinkDefinitionFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
  L extends LinkKeysFrom<O, K>,
> = ObjectInfoFrom<O, K>["links"][L];

export type LinkTargetTypeFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
  L extends LinkKeysFrom<O, K>,
> = LinkDefinitionFrom<O, K, L>["targetType"];

export interface PropertyDefinition {
  readonly?: boolean;
  displayName?: string;
  description?: string;
  type: keyof WirePropertyTypes;
  multiplicity?: boolean;
  nullable?: boolean;
}

// EATODO: Rename to WirePropertyTypes
export interface WirePropertyTypes {
  string: string;
  datetime: string;
  double: number;
  boolean: boolean;
  integer: number;
  timestamp: string;
  short: number;
  long: number;
  float: number;
  decimal: number;
  byte: number;

  numericTimeseries: any;
  stringTimeseries: any;

  attachment: any;
  geopoint: GeoJSON.Point;
  geoshape: GeoJSON.Geometry;
}
