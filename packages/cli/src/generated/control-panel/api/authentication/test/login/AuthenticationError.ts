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

import type { OidcTokenInvalidExpClaimError } from "./OidcTokenInvalidExpClaimError.js";
import type { OidcTokenInvalidIatClaimError } from "./OidcTokenInvalidIatClaimError.js";
import type { OidcTokenInvalidSignatureError } from "./OidcTokenInvalidSignatureError.js";
import type { OidcTokenMissingAudClaimError } from "./OidcTokenMissingAudClaimError.js";
import type { OidcTokenMissingExpClaimError } from "./OidcTokenMissingExpClaimError.js";
import type { OidcTokenMissingIatClaimError } from "./OidcTokenMissingIatClaimError.js";
import type { OidcTokenMissingIssClaimError } from "./OidcTokenMissingIssClaimError.js";
import type { OidcTokenMissingNonceClaimError } from "./OidcTokenMissingNonceClaimError.js";
import type { OidcTokenMissingSubClaimError } from "./OidcTokenMissingSubClaimError.js";
import type { OidcTokenRequestError } from "./OidcTokenRequestError.js";
import type { OidcTokenRequestMalformedResponseError } from "./OidcTokenRequestMalformedResponseError.js";
import type { OidcTokenRequestUnsuccessfulError } from "./OidcTokenRequestUnsuccessfulError.js";
import type { OidcUserInfoRequestError } from "./OidcUserInfoRequestError.js";
import type { OidcUserInfoRequestMalformedResponseError } from "./OidcUserInfoRequestMalformedResponseError.js";
import type { OidcUserInfoRequestUnsuccessfulError } from "./OidcUserInfoRequestUnsuccessfulError.js";
import type { OtherAuthenticationError } from "./OtherAuthenticationError.js";
import type { UserDeletedError } from "./UserDeletedError.js";
import type { UserManagerDeniedError } from "./UserManagerDeniedError.js";
export interface AuthenticationError_userDeleted {
  type: "userDeleted";
  userDeleted: UserDeletedError;
}

export interface AuthenticationError_userManagerDenied {
  type: "userManagerDenied";
  userManagerDenied: UserManagerDeniedError;
}

export interface AuthenticationError_oidcTokenMissingExpClaim {
  type: "oidcTokenMissingExpClaim";
  oidcTokenMissingExpClaim: OidcTokenMissingExpClaimError;
}

export interface AuthenticationError_oidcTokenMissingIatClaim {
  type: "oidcTokenMissingIatClaim";
  oidcTokenMissingIatClaim: OidcTokenMissingIatClaimError;
}

export interface AuthenticationError_oidcTokenMissingIssClaim {
  type: "oidcTokenMissingIssClaim";
  oidcTokenMissingIssClaim: OidcTokenMissingIssClaimError;
}

export interface AuthenticationError_oidcTokenMissingSubClaim {
  type: "oidcTokenMissingSubClaim";
  oidcTokenMissingSubClaim: OidcTokenMissingSubClaimError;
}

export interface AuthenticationError_oidcTokenMissingAudClaim {
  type: "oidcTokenMissingAudClaim";
  oidcTokenMissingAudClaim: OidcTokenMissingAudClaimError;
}

export interface AuthenticationError_oidcTokenMissingNonceClaim {
  type: "oidcTokenMissingNonceClaim";
  oidcTokenMissingNonceClaim: OidcTokenMissingNonceClaimError;
}

export interface AuthenticationError_oidcTokenInvalidExpClaim {
  type: "oidcTokenInvalidExpClaim";
  oidcTokenInvalidExpClaim: OidcTokenInvalidExpClaimError;
}

export interface AuthenticationError_oidcTokenInvalidIatClaim {
  type: "oidcTokenInvalidIatClaim";
  oidcTokenInvalidIatClaim: OidcTokenInvalidIatClaimError;
}

export interface AuthenticationError_oidcTokenInvalidSignature {
  type: "oidcTokenInvalidSignature";
  oidcTokenInvalidSignature: OidcTokenInvalidSignatureError;
}

export interface AuthenticationError_oidcTokenRequestError {
  type: "oidcTokenRequestError";
  oidcTokenRequestError: OidcTokenRequestError;
}

export interface AuthenticationError_oidcTokenRequestMalformedResponse {
  type: "oidcTokenRequestMalformedResponse";
  oidcTokenRequestMalformedResponse: OidcTokenRequestMalformedResponseError;
}

export interface AuthenticationError_oidcTokenRequestUnsuccessful {
  type: "oidcTokenRequestUnsuccessful";
  oidcTokenRequestUnsuccessful: OidcTokenRequestUnsuccessfulError;
}

export interface AuthenticationError_oidcUserInfoRequestError {
  type: "oidcUserInfoRequestError";
  oidcUserInfoRequestError: OidcUserInfoRequestError;
}

export interface AuthenticationError_oidcUserInfoRequestMalformedResponse {
  type: "oidcUserInfoRequestMalformedResponse";
  oidcUserInfoRequestMalformedResponse:
    OidcUserInfoRequestMalformedResponseError;
}

export interface AuthenticationError_oidcUserInfoRequestUnsuccessful {
  type: "oidcUserInfoRequestUnsuccessful";
  oidcUserInfoRequestUnsuccessful: OidcUserInfoRequestUnsuccessfulError;
}

export interface AuthenticationError_other {
  type: "other";
  other: OtherAuthenticationError;
}
export type AuthenticationError =
  | AuthenticationError_userDeleted
  | AuthenticationError_userManagerDenied
  | AuthenticationError_oidcTokenMissingExpClaim
  | AuthenticationError_oidcTokenMissingIatClaim
  | AuthenticationError_oidcTokenMissingIssClaim
  | AuthenticationError_oidcTokenMissingSubClaim
  | AuthenticationError_oidcTokenMissingAudClaim
  | AuthenticationError_oidcTokenMissingNonceClaim
  | AuthenticationError_oidcTokenInvalidExpClaim
  | AuthenticationError_oidcTokenInvalidIatClaim
  | AuthenticationError_oidcTokenInvalidSignature
  | AuthenticationError_oidcTokenRequestError
  | AuthenticationError_oidcTokenRequestMalformedResponse
  | AuthenticationError_oidcTokenRequestUnsuccessful
  | AuthenticationError_oidcUserInfoRequestError
  | AuthenticationError_oidcUserInfoRequestMalformedResponse
  | AuthenticationError_oidcUserInfoRequestUnsuccessful
  | AuthenticationError_other;
