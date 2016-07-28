/// <reference path="./globals.d.ts" />
/// <reference path="./buffer" />

declare module "vertx-js/http_connection" {
  export = HttpConnection;
}

/**
 * Represents an HTTP connection.
 * <p/>
 * HTTP/1.x connection provides an limited implementation, the following methods are implemented:
 * <ul>
 *   <li>close</li>
 *   <li>closeHandler</li>
 *   <li>exceptionHandler</li>
 * </ul>
 */
declare interface HttpConnection {

  /**
   * @return the current connection window size or <code>-1</code> for HTTP/1.x
   */
  getWindowSize(): number;

  /**
   * Update the current connection wide window size to a new size.
   * <p/>
   * Increasing this value, gives better performance when several data streams are multiplexed
   * <p/>
   * This is not implemented for HTTP/1.x.
   */
  setWindowSize(windowSize: number): HttpConnection;

  /**
   * Like goAway with a last stream id <code>2^31-1</code>.
   */
  goAway(errorCode: number): HttpConnection;

  /**
   * Like goAway with no buffer.
   */
  goAway(errorCode: number, lastStreamId: number): HttpConnection;

  /**
   * Send a go away frame to the remote endpoint of the connection.
   * <p/>
   * <ul>
   *   <li>a  frame is sent to the to the remote endpoint with the <code>errorCode</code> and <code>debugData</code></li>
   *   <li>any stream created after the stream identified by <code>lastStreamId</code> will be closed</li>
   *   <li>for an  is different than <code>0</code> when all the remaining streams are closed this connection will be closed automatically</li>
   * </ul>
   * <p/>
   * This is not implemented for HTTP/1.x.
   */
  goAway(errorCode: number, lastStreamId: number, debugData: Buffer): HttpConnection;

  /**
   * Set an handler called when a  frame is received.
   * <p/>
   * This is not implemented for HTTP/1.x.
   */
  goAwayHandler(handler: (e: any) => void): HttpConnection;

  /**
   * Set an handler called when a  frame has been sent or received and all connections are closed.
   * <p/>
   * This is not implemented for HTTP/1.x.
   */
  shutdownHandler(handler: (e: void) => void): HttpConnection;

  /**
   * Initiate a connection shutdown, a go away frame is sent and the connection is closed when all current active streams
   * are closed or after a time out of 30 seconds.
   * <p/>
   * This is not implemented for HTTP/1.x.
   */
  shutdown(): HttpConnection;

  /**
   * Initiate a connection shutdown, a go away frame is sent and the connection is closed when all current streams
   * will be closed or the <code>timeout</code> is fired.
   * <p/>
   * This is not implemented for HTTP/1.x.
   */
  shutdown(timeoutMs: number): HttpConnection;

  /**
   * Set a close handler. The handler will get notified when the connection is closed.
   */
  closeHandler(handler: (e: void) => void): HttpConnection;

  /**
   * Close the connection and all the currently active streams.
   * <p/>
   * An HTTP/2 connection will send a  frame before.
   */
  close(): void;

  /**
   * @return the latest server settings acknowledged by the remote endpoint - this is not implemented for HTTP/1.x
   */
  settings(): any;

  /**
   * Send to the remote endpoint an update of the server settings.
   * <p/>
   * This is not implemented for HTTP/1.x.
   */
  updateSettings(settings: any): HttpConnection;

  /**
   * Send to the remote endpoint an update of this endpoint settings
   * <p/>
   * The <code>completionHandler</code> will be notified when the remote endpoint has acknowledged the settings.
   * <p/>
   * This is not implemented for HTTP/1.x.
   */
  updateSettings(settings: any, completionHandler: (res: void, err?: Throwable) => void): HttpConnection;

  /**
   * @return the current remote endpoint settings for this connection - this is not implemented for HTTP/1.x
   */
  remoteSettings(): any;

  /**
   * Set an handler that is called when remote endpoint Http2Settings are updated.
   * <p/>
   * This is not implemented for HTTP/1.x.
   */
  remoteSettingsHandler(handler: (e: any) => void): HttpConnection;

  /**
   * Send a  frame to the remote endpoint.
   * <p/>
   * This is not implemented for HTTP/1.x.
   */
  ping(data: Buffer, pongHandler: (res: Buffer, err?: Throwable) => void): HttpConnection;

  /**
   * Set an handler notified when a  frame is received from the remote endpoint.
   * <p/>
   * This is not implemented for HTTP/1.x.
   */
  pingHandler(handler: (e: Buffer) => void): HttpConnection;

  /**
   * Set an handler called when a connection error happens
   */
  exceptionHandler(handler: (e: Throwable) => void): HttpConnection;

}

declare var HttpConnection: {

}