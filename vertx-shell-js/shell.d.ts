/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="./job" />
/// <reference path="./job_controller" />
/// <reference path="./cli_token" />
/// <reference path="./session" />

declare module "vertx-shell-js/shell" {
  export = Shell;
}

/**
 * An interactive session between a consumer and a shell.
 */

declare interface Shell
{

  /**
   * Create a job, the created job should then be executed with the run method.
   */
  createJob(line: Array<CliToken>): Job;

  /**
   * See createJob
   */
  createJob(line: string): Job;

  /**
   * @return the shell's job controller
   */
  jobController(): JobController;

  /**
   * @return the current shell session
   */
  session(): ShellSession;

  /**
   * Close the shell.
   */
  close(): void;
}

declare var Shell: {
}
