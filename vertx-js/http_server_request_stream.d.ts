/// <reference path="./globals.d.ts" />
/// <reference path="./http_server_request" />
/// <reference path="./read_stream" />

declare module "vertx-js/http_server_request_stream" {
  export = HttpServerRequestStream;
}

/**
 * A ReadStream of HttpServerRequest, used for
 * notifying http request to a HttpServer.
 */

declare interface HttpServerRequestStream
  extends
    ReadStream
{
  exceptionHandler(handler: (e: Throwable) => void): HttpServerRequestStream;
  handler(handler: (e: HttpServerRequest) => void): HttpServerRequestStream;
  pause(): HttpServerRequestStream;
  resume(): HttpServerRequestStream;
  endHandler(endHandler: (e: void) => void): HttpServerRequestStream;
}

declare var HttpServerRequestStream: {
}
