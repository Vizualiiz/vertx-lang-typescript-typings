/// <reference path="../vertx-js/globals.d.ts" />/// <reference path="../vertx-web-js/sock_js_socket" />/// <reference path="../vertx-js/vertx" />/// <reference path="./term" />declare module "vertx-shell-js/sock_js_term_handler" {  export = SockJSTermHandler;}

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 */

declare interface SockJSTermHandler{            

/**
   * Something has happened, so handle it.
   */
  handle(event: SockJSSocket): void;                      termHandler(handler: (e: Term) => void): SockJSTermHandler;    }      declare var SockJSTermHandler: {            create(vertx: Vertx, charset: string): SockJSTermHandler;      }