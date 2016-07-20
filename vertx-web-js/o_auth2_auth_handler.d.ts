/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="./route" />
/// <reference path="./auth_handler" />
/// <reference path="./routing_context" />
/// <reference path="../vertx-auth-common-js/auth_provider" />

declare module "vertx-web-js/o_auth2_auth_handler" {
  export = OAuth2AuthHandler;
}

/**
 * An auth handler that provides OAuth2 Authentication support. This handler is suitable for AuthCode flows.
 */

declare interface OAuth2AuthHandler
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

  /**
   * Build the authorization URL.
   */
  authURI(redirectURL: string, state: string): string;

  /**
   * add the callback handler to a given route.
   */
  setupCallback(route: Route): OAuth2AuthHandler;
}

declare var OAuth2AuthHandler: {

  /**
   * Create a JWT auth handler
   */
  create(authProvider: AuthProvider, uri: string): OAuth2AuthHandler;
}
