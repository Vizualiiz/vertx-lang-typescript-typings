/// <reference path="./globals.d.ts" />
/// <reference path="./server_web_socket" />
/// <reference path="./http_server_file_upload" />
/// <reference path="./buffer" />
/// <reference path="./http_frame" />
/// <reference path="./http_server_response" />
/// <reference path="./multi_map" />
/// <reference path="./read_stream" />
/// <reference path="./http_connection" />
/// <reference path="./socket_address" />
/// <reference path="./net_socket" />

declare module "vertx-js/http_server_request" {
  export = HttpServerRequest;
}

/**
 * Represents a server-side HTTP request.
 * <p>
 * Instances are created for each request and passed to the user via a handler.
 * <p>
 * Each instance of this class is associated with a corresponding HttpServerResponse instance via
 * response.<p>
 * It implements ReadStream so it can be used with
 * Pump to pump data with flow control.
 * <p>
 */
declare interface HttpServerRequest extends ReadStream {

  exceptionHandler(handler: (e: Throwable) => void): HttpServerRequest;

  handler(handler: (e: Buffer) => void): HttpServerRequest;

  pause(): HttpServerRequest;

  resume(): HttpServerRequest;

  endHandler(endHandler: (e: void) => void): HttpServerRequest;

  /**
   * @return the HTTP version of the request
   */
  version(): any;

  /**
   * @return the HTTP method for the request.
   */
  method(): any;

  /**
   * @return the HTTP method as sent by the client
   */
  rawMethod(): string;

  /**
   * @return true if this NetSocket is encrypted via SSL/TLS
   */
  isSSL(): boolean;

  /**
   * @return the scheme of the request
   */
  scheme(): string;

  /**
   * @return the URI of the request. This is usually a relative URI
   */
  uri(): string;

  /**
   * @return The path part of the uri. For example /somepath/somemorepath/someresource.foo
   */
  path(): string;

  /**
   * @return the query part of the uri. For example someparam=32&amp;someotherparam=x
   */
  query(): string;

  /**
   * @return the request host. For HTTP2 it returns the  pseudo header otherwise it returns the  header
   */
  host(): string;

  /**
   * @return the response. Each instance of this class has an HttpServerResponse instance attached to it. This is used
   * to send the response back to the client.
   */
  response(): HttpServerResponse;

  /**
   * @return the headers in the request.
   */
  headers(): MultiMap;

  /**
   * Return the first header value with the specified name
   */
  getHeader(headerName: string): string;

  /**
   * @return the query parameters in the request
   */
  params(): MultiMap;

  /**
   * Return the first param value with the specified name
   */
  getParam(paramName: string): string;

  /**
   * @return the remote (client side) address of the request
   */
  remoteAddress(): SocketAddress;

  /**
   * @return the local (server side) address of the server that handles the request
   */
  localAddress(): SocketAddress;

  /**
   * @return the absolute URI corresponding to the the HTTP request
   */
  absoluteURI(): string;

  /**
   * Convenience method for receiving the entire request body in one piece.
   * <p>
   * This saves the user having to manually setting a data and end handler and append the chunks of the body until
   * the whole body received. Don't use this if your request body is large - you could potentially run out of RAM.
   */
  bodyHandler(bodyHandler: (e: Buffer) => void): HttpServerRequest;

  /**
   * Get a net socket for the underlying connection of this request.
   * <p>
   * USE THIS WITH CAUTION!
   * <p>
   * Once you have called this method, you must handle writing to the connection yourself using the net socket,
   * the server request instance will no longer be usable as normal.
   * Writing to the socket directly if you don't know what you're doing can easily break the HTTP protocol.
   */
  netSocket(): NetSocket;

  /**
   * Call this with true if you are expecting a multi-part body to be submitted in the request.
   * This must be called before the body of the request has been received
   */
  setExpectMultipart(expect: boolean): HttpServerRequest;

  /**
   * @return  true if we are expecting a multi-part body for this request. See setExpectMultipart.
   */
  isExpectMultipart(): boolean;

  /**
   * Set an upload handler. The handler will get notified once a new file upload was received to allow you to deal
   * with the file upload.
   */
  uploadHandler(uploadHandler: (e: HttpServerFileUpload) => void): HttpServerRequest;

  /**
   * Returns a map of all form attributes in the request.
   * <p>
   * Be aware that the attributes will only be available after the whole body has been received, i.e. after
   * the request end handler has been called.
   * <p>
   * setExpectMultipart must be called first before trying to get the form attributes.
   */
  formAttributes(): MultiMap;

  /**
   * Return the first form attribute value with the specified name
   */
  getFormAttribute(attributeName: string): string;

  /**
   * Upgrade the connection to a WebSocket connection.
   * <p>
   * This is an alternative way of handling WebSockets and can only be used if no websocket handlers are set on the
   * Http server, and can only be used during the upgrade request during the WebSocket handshake.
   */
  upgrade(): ServerWebSocket;

  /**
   * Has the request ended? I.e. has the entire request, including the body been read?
   */
  isEnded(): boolean;

  /**
   * Set a custom frame handler. The handler will get notified when the http stream receives an custom HTTP/2
   * frame. HTTP/2 permits extension of the protocol.
   */
  customFrameHandler(handler: (e: HttpFrame) => void): HttpServerRequest;

  /**
   * @return the HttpConnection associated with this request
   */
  connection(): HttpConnection;

}

declare var HttpServerRequest: {

}