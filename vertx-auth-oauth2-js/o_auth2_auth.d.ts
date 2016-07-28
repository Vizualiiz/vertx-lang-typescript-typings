/// <reference path="../vertx-js/globals.d.ts" />/// <reference path="../vertx-js/vertx" />/// <reference path="./access_token" />/// <reference path="../vertx-auth-common-js/auth_provider" />declare module "vertx-auth-oauth2-js/o_auth2_auth" {  export = OAuth2Auth;}

/**
 * Factory interface for creating OAuth2 based AuthProvider instances.
 */

declare interface OAuth2Auth  extends AuthProvider{                                    

/**
   * Generate a redirect URL to the authN/Z backend. It only applies to auth_code flow.
   */
  authorizeURL(params: any): string;              

/**
   * Returns the Access Token object.
   */
  getToken(params: any, handler: (res: AccessToken, err?: Throwable) => void): void;              

/**
   * Call OAuth2 APIs.
   */
  api(method: any, path: string, params: any, handler: (res: any, err?: Throwable) => void): OAuth2Auth;              

/**
   * Returns true if this provider supports JWT tokens as the access_token. This is typically true if the provider
 * implements the `openid-connect` protocol. This is a plain return from the config option jwtToken, which is false
 * by default.
 *
 * This information is important to validate grants. Since pure OAuth2 should be used for authorization and when a
 * token is requested all grants should be declared, in case of openid-connect this is not true. OpenId will issue
 * a token and all grants will be encoded on the token itself so the requester does not need to list the required
 * grants.
   */
  hasJWTToken(): boolean;    }              declare var OAuth2Auth: {        

/**
   * Create a OAuth2 auth provider
   */
  createKeycloak(vertx: Vertx, flow: any, config: any): OAuth2Auth;          

/**
   * Create a OAuth2 auth provider
   */
  create(vertx: Vertx, flow: any, config: any): OAuth2Auth;          

/**
   * Create a OAuth2 auth provider
   */
  create(vertx: Vertx, flow: any): OAuth2Auth;                  }