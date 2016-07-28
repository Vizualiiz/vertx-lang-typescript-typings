/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="./auth_handler" />
/// <reference path="./routing_context" />
/// <reference path="../vertx-auth-common-js/auth_provider" />

declare module "vertx-web-js/redirect_auth_handler" {
  export = RedirectAuthHandler;
}

/**
 * An auth handler that's used to handle auth by redirecting user to a custom login page.
 */
declare interface RedirectAuthHandler extends AuthHandler {

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

declare var RedirectAuthHandler: {

  /**
   * Create a handler
   */
  create(authProvider: AuthProvider): AuthHandler;

  /**
   * Create a handler
   */
  create(authProvider: AuthProvider, loginRedirectURL: string): AuthHandler;

  /**
   * Create a handler
   */
  create(authProvider: AuthProvider, loginRedirectURL: string, returnURLParam: string): AuthHandler;

}