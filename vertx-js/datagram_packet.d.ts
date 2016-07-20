/// <reference path="./globals.d.ts" />
/// <reference path="./buffer" />
/// <reference path="./socket_address" />

declare module "vertx-js/datagram_packet" {
  export = DatagramPacket;
}

/**
 * A received datagram packet (UDP) which contains the data and information about the sender of the data itself.
 */

declare interface DatagramPacket
{

  /**
   * Returns the SocketAddress of the sender that sent
   * this DatagramPacket.
   */
  sender(): SocketAddress;

  /**
   * Returns the data of the DatagramPacket
   */
  data(): Buffer;
}

declare var DatagramPacket: {
}
