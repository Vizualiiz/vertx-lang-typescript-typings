/// <reference path="../vertx-js/globals.d.ts" />/// <reference path="./template_engine" />declare module "vertx-web-js/thymeleaf_template_engine" {  export = ThymeleafTemplateEngine;}

/**
 * A template engine that uses the Thymeleaf library.
 */

declare interface ThymeleafTemplateEngine  extends TemplateEngine{                    

/**
   * Set the mode for the engine
   */
  setMode(mode: any): ThymeleafTemplateEngine;    }    declare var ThymeleafTemplateEngine: {        

/**
   * Create a template engine using defaults
   */
  create(): ThymeleafTemplateEngine;      }