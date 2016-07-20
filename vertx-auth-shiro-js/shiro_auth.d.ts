/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="../vertx-js/vertx" />
/// <reference path="../vertx-auth-common-js/auth_provider" />

declare module "vertx-auth-shiro-js/shiro_auth" {
  export = ShiroAuth;
}

/**
 * Factory interface for creating Apache Shiro based AuthProvider instances.
 */

declare interface ShiroAuth
  extends AuthProvider
{

  /**
   * Set the role prefix to distinguish from permissions when checking for isPermitted requests.
   */
  setRolePrefix(rolePrefix: string): ShiroAuth;
}

declare var ShiroAuth: {

  /**
   * Create a Shiro auth provider
   */
  create(vertx: Vertx, realmType: any, config: any): ShiroAuth;

  /**
   * Create a Shiro auth provider
   */
  create(vertx: Vertx, options: any): ShiroAuth;
}
