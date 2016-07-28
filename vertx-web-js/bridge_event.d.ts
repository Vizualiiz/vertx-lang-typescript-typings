/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="./sock_js_socket" />
/// <reference path="../vertx-js/future" />

declare module "vertx-web-js/bridge_event" {
  export = BridgeEvent;
}

/**
 * Represents an event that occurs on the event bus bridge.
 * <p>
 * Please consult the documentation for a full explanation.
 */
declare interface BridgeEvent extends Future {

  /**
   * @return  the type of the event
   */
  type(): any;

  /**
   * Use getRawMessage instead, will be removed in 3.3
   */
  rawMessage(): any;

  /**
   * Get the raw JSON message for the event. This will be null for SOCKET_CREATED or SOCKET_CLOSED events as there is
   * no message involved. If the returned message is modified, setRawMessage should be called with the
   * new message.
   */
  getRawMessage(): any;

  /**
   * Get the raw JSON message for the event. This will be null for SOCKET_CREATED or SOCKET_CLOSED events as there is
   * no message involved.
   */
  setRawMessage(message: any): BridgeEvent;

  /**
   * Get the SockJSSocket instance corresponding to the event
   */
  socket(): SockJSSocket;

}

declare var BridgeEvent: {

}