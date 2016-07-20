/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="./template_engine" />

declare module "vertx-web-js/handlebars_template_engine" {
  export = HandlebarsTemplateEngine;
}

/**
 * A template engine that uses the Handlebars library.
 */

declare interface HandlebarsTemplateEngine
  extends TemplateEngine
{

  /**
   * Set the extension for the engine
   */
  setExtension(extension: string): HandlebarsTemplateEngine;

  /**
   * Set the max cache size for the engine
   */
  setMaxCacheSize(maxCacheSize: number): HandlebarsTemplateEngine;
}

declare var HandlebarsTemplateEngine: {

  /**
   * Create a template engine using defaults
   */
  create(): HandlebarsTemplateEngine;
}
