/// <reference path="./globals.d.ts" />

declare module "vertx-js/future" {
  export = Future;
}

/**
 * Represents the result of an action that may, or may not, have occurred yet.
 * <p>
 */

declare interface Future
{

  /**
   * Has the future completed?
   * <p>
   * It's completed if it's either succeeded or failed.
   */
  isComplete(): boolean;

  /**
   * Set a handler for the result.
   * <p>
   * If the future has already been completed it will be called immediately. Otherwise it will be called when the
   * future is completed.
   */
  setHandler(handler: (res: any, err?: Throwable) => void): Future;

  /**
   * Set the result. Any handler will be called, if there is one, and the future will be marked as completed.
   */
  complete(result: any): void;

  /**
   * Set a null result. Any handler will be called, if there is one, and the future will be marked as completed.
   */
  complete(): void;

  /**
   * Set the failure. Any handler will be called, if there is one, and the future will be marked as completed.
   */
  fail(throwable: Throwable): void;

  /**
   * Set the failure. Any handler will be called, if there is one, and the future will be marked as completed.
   */
  fail(failureMessage: string): void;

  /**
   * The result of the operation. This will be null if the operation failed.
   */
  result(): any;

  /**
   * A Throwable describing failure. This will be null if the operation succeeded.
   */
  cause(): Throwable;

  /**
   * Did it succeed?
   */
  succeeded(): boolean;

  /**
   * Did it fail?
   */
  failed(): boolean;

  /**
   * Compose this future with another future.
 *
   * When this future succeeds, the handler will be called with the value.
 *
   * When this future fails, the failure will be propagated to the <code>next</code> future.
   */
  compose(handler: (e: any) => void, next: Future): void;

  /**
   * @return an handler completing this future
   */
  completer(): (res: any, err?: Throwable) => void;
}

declare var Future: {

  /**
   * Create a future that hasn't completed yet
   */
  future(): Future;

  /**
   * Create a succeeded future with a null result
   */
  succeededFuture(): Future;

  /**
   * Created a succeeded future with the specified result.
   */
  succeededFuture(result: any): Future;

  /**
   * Create a failed future with the specified failure message.
   */
  failedFuture(failureMessage: string): Future;
}
