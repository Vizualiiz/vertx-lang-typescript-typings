/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="./routing_context" />

declare module "vertx-web-js/error_handler" {
  export = ErrorHandler;
}

/**
 * A pretty error handler for rendering error pages.
 */

declare interface ErrorHandler
{

  /**
   * Something has happened, so handle it.
   */
  handle(event: RoutingContext): void;
}

declare var ErrorHandler: {

  /**
   * Create an error handler using defaults
   */
  create(): ErrorHandler;

  /**
   * Create an error handler
   */
  create(errorTemplateName: string, displayExceptionDetails: boolean): ErrorHandler;

  /**
   * Create an error handler
   */
  create(displayExceptionDetails: boolean): ErrorHandler;

  /**
   * Create an error handler
   */
  create(errorTemplateName: string): ErrorHandler;
}
