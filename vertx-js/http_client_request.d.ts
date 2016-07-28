/// <reference path="./globals.d.ts" />
/// <reference path="./http_client_response" />
/// <reference path="./buffer" />
/// <reference path="./http_frame" />
/// <reference path="./write_stream" />
/// <reference path="./multi_map" />
/// <reference path="./read_stream" />
/// <reference path="./http_connection" />

declare module "vertx-js/http_client_request" {
  export = HttpClientRequest;
}

/**
 * Represents a client-side HTTP request.
 * <p>
 * Instances are created by an HttpClient instance, via one of the methods corresponding to the
 * specific HTTP methods, or the generic request methods. On creation the request will not have been written to the
 * wire.
 * <p>
 * Once a request has been obtained, headers can be set on it, and data can be written to its body if required. Once
 * you are ready to send the request, one of the end methods should be called.
 * <p>
 * Nothing is actually sent until the request has been internally assigned an HTTP connection.
 * <p>
 * The HttpClient instance will return an instance of this class immediately, even if there are no HTTP
 * connections available in the pool. Any requests sent before a connection is assigned will be queued
 * internally and actually sent when an HTTP connection becomes available from the pool.
 * <p>
 * The headers of the request are queued for writing either when the end method is called, or, when the first
 * part of the body is written, whichever occurs first.
 * <p>
 * This class supports both chunked and non-chunked HTTP.
 * <p>
 * It implements WriteStream so it can be used with
 * Pump to pump data with flow control.
 * <p>
 * An example of using this class is as follows:
 * <p>
 */
declare interface HttpClientRequest extends WriteStream, ReadStream {

  /**
   * This will return <code>true</code> if there are more bytes in the write queue than the value set using setWriteQueueMaxSize
   */
  writeQueueFull(): boolean;

  exceptionHandler(handler: (e: Throwable) => void): HttpClientRequest;

  /**
   * @throws java.lang.IllegalStateException when no response handler is set
   */
  write(data: Buffer): HttpClientRequest;

  setWriteQueueMaxSize(maxSize: number): HttpClientRequest;

  drainHandler(handler: (e: void) => void): HttpClientRequest;

  handler(handler: (e: HttpClientResponse) => void): HttpClientRequest;

  pause(): HttpClientRequest;

  resume(): HttpClientRequest;

  endHandler(endHandler: (e: void) => void): HttpClientRequest;

  /**
   * If chunked is true then the request will be set into HTTP chunked mode
   */
  setChunked(chunked: boolean): HttpClientRequest;

  /**
   * @return Is the request chunked?
   */
  isChunked(): boolean;

  /**
   * The HTTP method for the request.
   */
  method(): any;

  /**
   * @return the raw value of the method this request sends
   */
  getRawMethod(): string;

  /**
   * Set the value the method to send when the method  is used.
   */
  setRawMethod(method: string): HttpClientRequest;

  /**
   * @return The URI of the request.
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
   * Set the request host.<p/>
   *
   * For HTTP2 it sets the  pseudo header otherwise it sets the  header
   */
  setHost(host: string): HttpClientRequest;

  /**
   * @return the request host. For HTTP2 it returns the  pseudo header otherwise it returns the  header
   */
  getHost(): string;

  /**
   * @return The HTTP headers
   */
  headers(): MultiMap;

  /**
   * Put an HTTP header
   */
  putHeader(name: string, value: string): HttpClientRequest;

  /**
   * Write a String to the request body, encoded as UTF-8.
   */
  write(chunk: string): HttpClientRequest;

  /**
   * Write a String to the request body, encoded using the encoding <code>enc</code>.
   */
  write(chunk: string, enc: string): HttpClientRequest;

  /**
   * If you send an HTTP request with the header <code>Expect</code> set to the value <code>100-continue</code>
   * and the server responds with an interim HTTP response with a status code of <code>100</code> and a continue handler
   * has been set using this method, then the <code>handler</code> will be called.
   * <p>
   * You can then continue to write data to the request body and later end it. This is normally used in conjunction with
   * the sendHead method to force the request header to be written before the request has ended.
   */
  continueHandler(handler: (e: void) => void): HttpClientRequest;

  /**
   * Forces the head of the request to be written before end is called on the request or any data is
   * written to it.
   * <p>
   * This is normally used to implement HTTP 100-continue handling, see  for
   * more information.
   */
  sendHead(): HttpClientRequest;

  /**
   * Like sendHead but with an handler after headers have been sent. The handler will be called with
   * the HttpVersion if it can be determined or null otherwise.<p>
   */
  sendHead(completionHandler: (e: any) => void): HttpClientRequest;

  /**
   * Same as end but writes a String in UTF-8 encoding
   */
  end(chunk: string): void;

  /**
   * Same as end but writes a String with the specified encoding
   */
  end(chunk: string, enc: string): void;

  /**
   * Same as end but writes some data to the request body before ending. If the request is not chunked and
   * no other data has been written then the <code>Content-Length</code> header will be automatically set
   */
  end(chunk: Buffer): void;

  /**
   * Ends the request. If no data has been written to the request body, and sendHead has not been called then
   * the actual request won't get written until this method gets called.
   * <p>
   * Once the request has ended, it cannot be used any more,
   */
  end(): void;

  /**
   * Set's the amount of time after which if the request does not return any data within the timeout period an
   * TimeoutException will be passed to the exception handler (if provided) and
   * the request will be closed.
   * <p>
   * Calling this method more than once has the effect of canceling any existing timeout and starting
   * the timeout from scratch.
   */
  setTimeout(timeoutMs: number): HttpClientRequest;

  /**
   * Set a push handler for this request.<p/>
   *
   * The handler is called when the client receives a <i>push promise</i> from the server. The handler can be called
   * multiple times, for each push promise.<p/>
   *
   * The handler is called with a <i>read-only</i> HttpClientRequest, the following methods can be called:<p/>
   *
   * <ul>
   *   <li>method</li>
   *   <li>uri</li>
   *   <li>headers</li>
   *   <li>getHost</li>
   * </ul>
   *
   * In addition the handler should call the handler method to set an handler to
   * process the response.<p/>
   */
  pushHandler(handler: (e: HttpClientRequest) => void): HttpClientRequest;

  /**
   * Reset this stream with the error code <code>0</code>.
   */
  reset(): void;

  /**
   * Reset this stream with the error <code>code</code>.
   */
  reset(code: number): void;

  /**
   * @return the HttpConnection associated with this request
   */
  connection(): HttpConnection;

  /**
   * Set a connection handler called when an HTTP connection has been established.
   */
  connectionHandler(handler: (e: HttpConnection) => void): HttpClientRequest;

  /**
   * Write an HTTP/2 frame to the request, allowing to extend the HTTP/2 protocol.<p>
   *
   * The frame is sent immediatly and is not subject to flow control.<p>
   *
   * This method must be called after the request headers have been sent and only for the protocol HTTP/2.
   * The sendHead should be used for this purpose.
   */
  writeCustomFrame(type: number, flags: number, payload: Buffer): HttpClientRequest;

  /**
   * @return the id of the stream of this response,  when it is not yet determined, i.e
   *         the request has not been yet sent or it is not supported HTTP/1.x
   */
  streamId(): number;

  /**
   * Like writeCustomFrame but with an HttpFrame.
   */
  writeCustomFrame(frame: HttpFrame): HttpClientRequest;

}

declare var HttpClientRequest: {

}