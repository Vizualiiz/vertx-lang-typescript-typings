/// <reference path="./globals.d.ts" />
/// <reference path="./buffer" />

declare module "vertx-js/http_frame" {
  export = HttpFrame;
}

/**
 * An HTTP/2 frame.
 */
declare interface HttpFrame {

  /**
   * @return the 8-bit type of the frame
   */
  type(): number;

  /**
   * @return the 8-bit flags specific to the frame
   */
  flags(): number;

  /**
   * @return the frame payload
   */
  payload(): Buffer;

}

declare var HttpFrame: {

}