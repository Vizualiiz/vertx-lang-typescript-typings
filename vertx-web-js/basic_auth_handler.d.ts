/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="./auth_handler" />
/// <reference path="./routing_context" />
/// <reference path="../vertx-auth-common-js/auth_provider" />

declare module "vertx-web-js/basic_auth_handler" {
  export = BasicAuthHandler;
}

/**
 * An auth handler that provides HTTP Basic Authentication support.
 */

declare interface BasicAuthHandler
  extends
    AuthHandler
{

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
}

declare var BasicAuthHandler: {

  /**
   * Create a basic auth handler
   */
  create(authProvider: AuthProvider): AuthHandler;

  /**
   * Create a basic auth handler, specifying realm
   */
  create(authProvider: AuthProvider, realm: string): AuthHandler;
}
