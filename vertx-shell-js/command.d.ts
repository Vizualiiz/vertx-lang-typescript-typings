/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="./completion" />
/// <reference path="../vertx-js/cli" />
/// <reference path="./cli_token" />
/// <reference path="./process" />

declare module "vertx-shell-js/command" {
  export = Command;
}

/**
 * A Vert.x Shell command, it can be created from any language using the command or from a
 * Java class using create
 */

declare interface Command
{

  /**
   * @return the command name
   */
  name(): string;

  /**
   * @return the command line interface, can be null
   */
  cli(): CLI;

  /**
   * Create a new process with empty arguments.
   */
  createProcess(): Process;

  /**
   * Create a new process with the passed arguments.
   */
  createProcess(args: Array<CliToken>): Process;

  /**
   * Perform command completion, when the command is done completing it should call 
   * or  )} method to signal completion is done.
   */
  complete(completion: Completion): void;
}

declare var Command: {
}
