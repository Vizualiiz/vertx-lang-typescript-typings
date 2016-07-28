/// <reference path="./globals.d.ts" />/// <reference path="./read_stream" />/// <reference path="./net_socket" />declare module "vertx-js/net_socket_stream" {  export = NetSocketStream;}

/**
 * A ReadStream of NetSocket, used for notifying
 * socket connections to a NetServer.
 */

declare interface NetSocketStream  extends      ReadStream  {            exceptionHandler(handler: (e: Throwable) => void): NetSocketStream;              handler(handler: (e: NetSocket) => void): NetSocketStream;              pause(): NetSocketStream;              resume(): NetSocketStream;              endHandler(endHandler: (e: void) => void): NetSocketStream;    }          declare var NetSocketStream: {}