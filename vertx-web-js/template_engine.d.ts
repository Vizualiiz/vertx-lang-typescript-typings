/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="../vertx-js/buffer" />
/// <reference path="./routing_context" />

declare module "vertx-web-js/template_engine" {
  export = TemplateEngine;
}

/**
 * A template engine uses a specific template and the data in a routing context to render a resource into a buffer.
 * <p>
 * Concrete implementations exist for several well-known template engines.
 */
declare interface TemplateEngine {

  /**
   * Render
   */
  render(context: RoutingContext, templateFileName: string, handler: (res: Buffer, err?: Throwable) => void): void;

}

declare var TemplateEngine: {

}