/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="../vertx-js/vertx" />
/// <reference path="./cli_token" />
/// <reference path="./session" />

declare module "vertx-shell-js/completion" {
  export = Completion;
}

/**
 * The completion object
 */

declare interface Completion
{

  /**
   * @return the current Vert.x instance
   */
  vertx(): Vertx;

  /**
   * @return the shell current session, useful for accessing data like the current path for file completion, etc...
   */
  session(): ShellSession;

  /**
   * @return the current line being completed in raw format, i.e without any char escape performed
   */
  rawLine(): string;

  /**
   * @return the current line being completed as preparsed tokens
   */
  lineTokens(): Array<CliToken>;

  /**
   * End the completion with a list of candidates, these candidates will be displayed by the shell on the console.
   */
  complete(candidates: Array<string>): void;

  /**
   * End the completion with a value that will be inserted to complete the line.
   */
  complete(value: string, terminal: boolean): void;
}

declare var Completion: {
}
