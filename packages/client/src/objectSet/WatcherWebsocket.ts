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

import {
  type ObjectTypesFrom,
  type OntologyDefinition,
  type ThinClient,
} from "@osdk/api";
import type { ConjureContext } from "conjure-lite";
import WebSocket from "isomorphic-ws";
import { batchEnableWatcher } from "../generated/object-set-watcher/ObjectSetWatchService.mjs";
import type { ObjectSet } from "./ObjectSet";
import type { ObjectSetListener } from "./ObjectSetWatcher";

export class WatcherWebsocket<O extends OntologyDefinition<any, any, any>> {
  static #instances = new WeakMap<ThinClient<any>, WatcherWebsocket<any>>();

  static getInstance<O extends OntologyDefinition<any, any, any>>(
    client: ThinClient<O>,
  ) {
    let instance = WatcherWebsocket.#instances.get(client);
    if (instance == null) {
      instance = new WatcherWebsocket(client);
      WatcherWebsocket.#instances.set(client, instance);
    }
    return instance;
  }

  #ws: WebSocket | undefined;
  #client: ThinClient<O>;
  #pendingListeners = new Map<string, ObjectSetListener<O, any>>();
  #listeners = new Map<string, ObjectSetListener<O, any>>();
  #conjureContext: ConjureContext;

  private constructor(client: ThinClient<O>) {
    this.#client = client;

    const stackUrl = new URL(client.stack);
    this.#conjureContext = {
      baseUrl: stackUrl.origin,
      servicePath: "object-set-watcher/api",
      fetchFn: client.fetch,
      tokenProvider: async () => await client.tokenProvider(),
    };
  }

  async subscribe<K extends ObjectTypesFrom<O>>(
    objectSet: ObjectSet<O, K>,
    listener: ObjectSetListener<O, K>,
  ): Promise<() => void> {
    // TODO more parallelism

    const [temporaryObjectSet] = await Promise.all([
      // create a time-bounded object set representation for watching
      this.#createTemporaryObjectSet(objectSet),

      this.#ensureWebsocket(),

      // look up the object type's rid and ensure that we have enabled object set watcher for that rid
      this.#getObjectType(
        this.#client.ontology.metadata.ontologyRid,
        getObjectSetBaseType(objectSet),
      ).then(objectTypeMetadata =>
        this.#enableObjectSetsWatcher([objectTypeMetadata.rid])
      ),
    ]);

    // subscribe to object set
    const requestId = crypto.randomUUID();
    const subscribe = {};
    this.#pendingListeners.set(requestId, listener);
    this.#ws?.send(JSON.stringify(subscribe));

    // wait for subscription response

    // return the unsubscribe
    return () => {
      // TODO there isn't actually a network call we can send yet
      // remove the listener
    };
  }

  async #ensureWebsocket() {
    if (this.#ws == null) {
      const { stack, tokenProvider } = this.#client;
      const base = new URL(stack);
      // TODO support alternate contextPath values
      const url =
        `wss://${base.host}/object-set-watcher/ws/streamSubscriptions`;
      const token = await tokenProvider();
      this.#ws = new WebSocket(url, [`Bearer-${token}`]);

      this.#ws.addEventListener("error", () => {
        this.#destroyWebsocket();
      });

      this.#ws.addEventListener("close", () => {
        this.#notifyCancel();
      });

      return new Promise<void>((resolve, reject) => {
        this.#ws!.addEventListener("open", () => {
          resolve();
        });
        this.#ws!.addEventListener("error", (event: WebSocket.ErrorEvent) => {
          reject(new Error(event.toString()));
        });
      });
    }
  }

  async #getObjectType(ontologyRid: string, objectApiName: string) {
    // call getObjectType from conjure
    return { rid: "rid" };
  }

  async #enableObjectSetsWatcher(objectTypeRids: string[]) {
    return batchEnableWatcher(this.#conjureContext, {
      requests: objectTypeRids,
    });
  }

  async #createTemporaryObjectSet<K extends ObjectTypesFrom<O>>(
    objectSet: ObjectSet<O, K>,
  ) {
    // call temporary from object-set-watcher conjure
    createTemporaryObjectSet(this.#conjureContext, {
      objectSet: toConjureObjectSet(objectSet),
      timeToLive: "ONE_DAY",
    });
    return { objectSetRid: "objectSetRid" };
  }

  #destroyWebsocket() {
    if (this.#ws) {
      this.#ws.close();
      this.#ws = undefined;
    }
  }

  #notifyCancel() {
  }
}

function getObjectSetBaseType<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
>(objectSet: ObjectSet<O, K>) {
  return "baseType";
}

function toConjureObjectSet<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
>(objectSet: ObjectSet<O, K>) {
  return objectset;
}
