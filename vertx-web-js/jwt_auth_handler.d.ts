/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="./auth_handler" />
/// <reference path="./routing_context" />
/// <reference path="../vertx-auth-jwt-js/jwt_auth" />

declare module "vertx-web-js/jwt_auth_handler" {
  export = JWTAuthHandler;
}

/**
 * An auth handler that provides JWT Authentication support.
 */
declare interface JWTAuthHandler extends AuthHandler {

  /**
   * Something has happened, so handle it.
   */
  handle(event: RoutingContext): void;

  /**
   * Add a required authority for this auth handler
   */
  addAuthority(authority: string): AuthHandler;

  /**
   * Add a set of required authorities for this auth handler
   */
  addAuthorities(authorities: Array<string>): AuthHandler;

  /**
   * Set the audience list
   */
  setAudience(audience: Array<string>): JWTAuthHandler;

  /**
   * Set the issuer
   */
  setIssuer(issuer: string): JWTAuthHandler;

  /**
   * Set whether expiration is ignored
   */
  setIgnoreExpiration(ignoreExpiration: boolean): JWTAuthHandler;

}

declare var JWTAuthHandler: {

  /**
   * Create a JWT auth handler
   */
  create(authProvider: JWTAuth): JWTAuthHandler;

  /**
   * Create a JWT auth handler
   */
  create(authProvider: JWTAuth, skip: string): JWTAuthHandler;

}