/// <reference path="./globals.d.ts" />/// <reference path="./measured" />/// <reference path="./future" />declare module "vertx-js/worker_executor" {  export = WorkerExecutor;}

/**
 * An executor for executing blocking code in Vert.x .<p>
 *
 * It provides the same <code>executeBlocking</code> operation than Context and
 * Vertx but on a separate worker pool.<p>
 */

declare interface WorkerExecutor  extends      Measured  {            

/**
   * Whether the metrics are enabled for this measured object
   */
  isMetricsEnabled(): boolean;              

/**
   * Safely execute some blocking code.
 * <p>
 * Executes the blocking code in the handler <code>blockingCodeHandler</code> using a thread from the worker pool.
 * <p>
 * When the code is complete the handler <code>resultHandler</code> will be called with the result on the original context
 * (e.g. on the original event loop of the caller).
 * <p>
 * A <code>Future</code> instance is passed into <code>blockingCodeHandler</code>. When the blocking code successfully completes,
 * the handler should call the complete or complete method, or the fail
 * method if it failed.
 * <p>
 * In the <code>blockingCodeHandler</code> the current context remains the original context and therefore any task
 * scheduled in the <code>blockingCodeHandler</code> will be executed on the this context and not on the worker thread.
   */
  executeBlocking(blockingCodeHandler: (e: Future) => void, ordered: boolean, resultHandler: (res: any, err?: Throwable) => void): void;              

/**
   * Like executeBlocking called with ordered = true.
   */
  executeBlocking(blockingCodeHandler: (e: Future) => void, resultHandler: (res: any, err?: Throwable) => void): void;              

/**
   * Close the executor.
   */
  close(): void;    }        declare var WorkerExecutor: {}