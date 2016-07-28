/// <reference path="../vertx-js/globals.d.ts" />/// <reference path="../vertx-js/vertx" />/// <reference path="../vertx-auth-common-js/auth_provider" />declare module "vertx-auth-jwt-js/jwt_auth" {  export = JWTAuth;}

/**
 * Factory interface for creating JWT based AuthProvider instances.
 */

declare interface JWTAuth  extends AuthProvider{                    

/**
   * Generate a new JWT token.
   */
  generateToken(claims: any, options: any): string;    }    declare var JWTAuth: {        

/**
   * Create a JWT auth provider
   */
  create(vertx: Vertx, config: any): JWTAuth;      }