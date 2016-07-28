/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="../vertx-auth-common-js/user" />

declare module "vertx-auth-oauth2-js/access_token" {
  export = AccessToken;
}

/**
 * AccessToken extension to the User interface
 */
declare interface AccessToken extends User {

  /**
   * Check if the access token is expired or not.
   */
  expired(): boolean;

  /**
   * Refresh the access token
   */
  refresh(callback: (res: void, err?: Throwable) => void): AccessToken;

  /**
   * Revoke access or refresh token
   */
  revoke(token_type: string, callback: (res: void, err?: Throwable) => void): AccessToken;

  /**
   * Revoke refresh token and calls the logout endpoint. This is a openid-connect extension and might not be
   * available on all providers.
   */
  logout(callback: (res: void, err?: Throwable) => void): AccessToken;

}

declare var AccessToken: {

}