/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="./routing_context" />

declare module "vertx-web-js/body_handler" {
  export = BodyHandler;
}

/**
 * A handler which gathers the entire request body and sets it on the .
 * <p>
 * It also handles HTTP file uploads and can be used to limit body sizes.
 */
declare interface BodyHandler {

  /**
   * Something has happened, so handle it.
   */
  handle(event: RoutingContext): void;

  /**
   * Set the maximum body size -1 means unlimited
   */
  setBodyLimit(bodyLimit: number): BodyHandler;

  /**
   * Set the uploads directory to use
   */
  setUploadsDirectory(uploadsDirectory: string): BodyHandler;

  /**
   * Set whether form attributes will be added to the request parameters
   */
  setMergeFormAttributes(mergeFormAttributes: boolean): BodyHandler;

  /**
   * Set whether uploaded files should be removed after handling the request
   */
  setDeleteUploadedFilesOnEnd(deleteUploadedFilesOnEnd: boolean): BodyHandler;

}

declare var BodyHandler: {

  /**
   * Create a body handler with defaults
   */
  create(): BodyHandler;

  /**
   * Create a body handler and use the given upload directory.
   */
  create(uploadDirectory: string): BodyHandler;

}