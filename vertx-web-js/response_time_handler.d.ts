/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="./routing_context" />

declare module "vertx-web-js/response_time_handler" {
  export = ResponseTimeHandler;
}

/**
 * Handler which adds a header `x-response-time` in the response of matching requests containing the time taken
 * in ms to process the request.
 */

declare interface ResponseTimeHandler
{

  /**
   * Something has happened, so handle it.
   */
  handle(event: RoutingContext): void;
}

declare var ResponseTimeHandler: {

  /**
   * Create a handler
   */
  create(): ResponseTimeHandler;
}
