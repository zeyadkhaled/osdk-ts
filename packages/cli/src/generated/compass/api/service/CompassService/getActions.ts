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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type { Action } from "../../registry/Action.js";

/**
 * Returns the list of actions registered for any resource type.
 *
 * If a track is provided, will only return actions available on the requested track,
 * including actions without a track.
 * If a track is not provided, will return all actions.
 *
 * If a locale is provided, will return localized descriptions/titles where available.
 */
export async function getActions(
  ctx: ConjureContext,
  palantirExternalHost: string | undefined,
  track: string | undefined,
  locale: string | undefined,
): Promise<Array<Action>> {
  return conjureFetch(
    ctx,
    `/registry/actions?${new URLSearchParams({
      "track": "" + track,
      "locale": "" + locale,
    })}`,
    "GET",
  );
}
