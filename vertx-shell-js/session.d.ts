/// <reference path="../vertx-js/globals.d.ts" />declare module "vertx-shell-js/session" {  export = ShellSession;}

/**
 * A shell session.
 */

declare interface ShellSession{                    

/**
   * Put some data in a session
   */
  put(key: string, obj: any): ShellSession;              

/**
   * Get some data from the session
   */
  get(key: string): any;              

/**
   * Remove some data from the session
   */
  remove(key: string): any;    }        declare var ShellSession: {        

/**
   * Create a new empty session.
   */
  create(): ShellSession;              }