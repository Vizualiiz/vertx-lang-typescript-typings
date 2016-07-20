/// <reference path="./globals.d.ts" />

declare module "vertx-js/stream_base" {
  export = StreamBase;
}

/**
 * Base interface for a stream.
 */

declare interface StreamBase
{

  /**
   * Set an exception handler.
   */
  exceptionHandler(handler: (e: Throwable) => void): StreamBase;
}

declare var StreamBase: {
}
