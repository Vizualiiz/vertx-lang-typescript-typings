/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="./template_engine" />
/// <reference path="./routing_context" />

declare module "vertx-web-js/template_handler" {
  export = TemplateHandler;
}

/**
 *
 * A handler which renders responses using a template engine and where the template name is selected from the URI
 * path.
 */

declare interface TemplateHandler
{

  /**
   * Something has happened, so handle it.
   */
  handle(event: RoutingContext): void;
}

declare var TemplateHandler: {

  /**
   * Create a handler
   */
  create(engine: TemplateEngine): TemplateHandler;

  /**
   * Create a handler
   */
  create(engine: TemplateEngine, templateDirectory: string, contentType: string): TemplateHandler;
}
