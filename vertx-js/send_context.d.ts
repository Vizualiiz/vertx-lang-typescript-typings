/// <reference path="./globals.d.ts" />/// <reference path="./message" />declare module "vertx-js/send_context" {  export = SendContext;}

/**
 *
 * Encapsulates a message being sent from Vert.x. Used with event bus interceptors
 */

declare interface SendContext{            

/**
   * @return  The message being sent
   */
  message(): Message;              

/**
   * Call the next interceptor
   */
  next(): void;              

/**
     */
  send(): boolean;    }      declare var SendContext: {}