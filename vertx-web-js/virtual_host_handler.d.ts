/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="./routing_context" />

declare module "vertx-web-js/virtual_host_handler" {
  export = VirtualHostHandler;
}

/**
 * Handler that will filter requests based on the request Host name.
 */
declare interface VirtualHostHandler {

  /**
   * Something has happened, so handle it.
   */
  handle(event: RoutingContext): void;

}

declare var VirtualHostHandler: {

  /**
   * Create a handler
   */
  create(hostname: string, handler: (e: RoutingContext) => void): VirtualHostHandler;

}