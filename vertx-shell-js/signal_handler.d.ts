/// <reference path="../vertx-js/globals.d.ts" />declare module "vertx-shell-js/signal_handler" {  export = SignalHandler;}

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 */

declare interface SignalHandler{            deliver(key: number): boolean;    }  declare var SignalHandler: {}