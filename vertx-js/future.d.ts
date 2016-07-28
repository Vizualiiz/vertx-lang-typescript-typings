/// <reference path="./globals.d.ts" />declare module "vertx-js/future" {  export = Future;}

/**
 * Represents the result of an action that may, or may not, have occurred yet.
 * <p>
 */

declare interface Future{                                            

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
   * Compose this future with a provided <code>next</code> future.<p>
 *
 * When this (the one on which <code>compose</code> is called) future succeeds, the <code>handler</code> will be called with
 * the completed value, this handler should complete the next future.<p>
 *
 * If the <code>handler</code> throws an exception, the returned future will be failed with this exception.<p>
 *
 * When this future fails, the failure will be propagated to the <code>next</code> future and the <code>handler</code>
 * will not be called.
   */
  compose(handler: (e: any) => void, next: Future): Future;              

/**
   * Compose this future with a <code>mapper</code> function.<p>
 *
 * When this future (the one on which <code>compose</code> is called) succeeds, the <code>mapper</code> will be called with
 * the completed value and this mapper returns another future object. This returned future completion will complete
 * the future returned by this method call.<p>
 *
 * If the <code>mapper</code> throws an exception, the returned future will be failed with this exception.<p>
 *
 * When this future fails, the failure will be propagated to the returned future and the <code>mapper</code>
 * will not be called.
   */
  compose(mapper: Function): Future;              

/**
   * Apply a <code>mapper</code> function on this future.<p>
 *
 * When this future succeeds, the <code>mapper</code> will be called with the completed value and this mapper
 * returns a value. This value will complete the future returned by this method call.<p>
 *
 * If the <code>mapper</code> throws an exception, the returned future will be failed with this exception.<p>
 *
 * When this future fails, the failure will be propagated to the returned future and the <code>mapper</code>
 * will not be called.
   */
  map(mapper: Function): Future;              

/**
   * Map the result of a future to a specific <code>value</code>.<p>
 *
 * When this future succeeds, this <code>value</code> will complete the future returned by this method call.<p>
 *
 * When this future fails, the failure will be propagated to the returned future.
   */
  map(value: any): Future;              

/**
   * @return an handler completing this future
   */
  completer(): (res: any, err?: Throwable) => void;    }                                      declare var Future: {        

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
  failedFuture(failureMessage: string): Future;                                                              }