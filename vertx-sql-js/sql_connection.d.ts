/// <reference path="../vertx-js/globals.d.ts" />declare module "vertx-sql-js/sql_connection" {  export = SQLConnection;}

/**
 * Represents a connection to a SQL database
 */

declare interface SQLConnection{            

/**
   * Sets the auto commit flag for this connection. True by default.
   */
  setAutoCommit(autoCommit: boolean, resultHandler: (res: void, err?: Throwable) => void): SQLConnection;              

/**
   * Executes the given SQL statement
   */
  execute(sql: string, resultHandler: (res: void, err?: Throwable) => void): SQLConnection;              

/**
   * Executes the given SQL <code>SELECT</code> statement which returns the results of the query.
   */
  query(sql: string, resultHandler: (res: any, err?: Throwable) => void): SQLConnection;              

/**
   * Executes the given SQL <code>SELECT</code> prepared statement which returns the results of the query.
   */
  queryWithParams(sql: string, params: any[], resultHandler: (res: any, err?: Throwable) => void): SQLConnection;              

/**
   * Executes the given SQL statement which may be an <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code>
 * statement.
   */
  update(sql: string, resultHandler: (res: any, err?: Throwable) => void): SQLConnection;              

/**
   * Executes the given prepared statement which may be an <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code>
 * statement with the given parameters
   */
  updateWithParams(sql: string, params: any[], resultHandler: (res: any, err?: Throwable) => void): SQLConnection;              

/**
   * Calls the given SQL <code>PROCEDURE</code> which returns the result from the procedure.
   */
  call(sql: string, resultHandler: (res: any, err?: Throwable) => void): SQLConnection;              

/**
   * Calls the given SQL <code>PROCEDURE</code> which returns the result from the procedure.
 *
 * The index of params and outputs are important for both arrays, for example when dealing with a prodecure that
 * takes the first 2 arguments as input values and the 3 arg as an output then the arrays should be like:
 *
 * <pre>
 *   params = [VALUE1, VALUE2, null]
 *   outputs = [null, null, "VARCHAR"]
 * </pre>
   */
  callWithParams(sql: string, params: any[], outputs: any[], resultHandler: (res: any, err?: Throwable) => void): SQLConnection;              

/**
   * Closes the connection. Important to always close the connection when you are done so it's returned to the pool.
   */
  close(handler: (res: void, err?: Throwable) => void): void;              

/**
   * Closes the connection. Important to always close the connection when you are done so it's returned to the pool.
   */
  close(): void;              

/**
   * Commits all changes made since the previous commit/rollback.
   */
  commit(handler: (res: void, err?: Throwable) => void): SQLConnection;              

/**
   * Rolls back all changes made since the previous commit/rollback.
   */
  rollback(handler: (res: void, err?: Throwable) => void): SQLConnection;              

/**
   * Sets a connection wide query timeout.
 *
 * It can be over written at any time and becomes active on the next query call.
   */
  setQueryTimeout(timeoutInSeconds: number): SQLConnection;              

/**
   * Batch simple SQL strings and execute the batch where the async result contains a array of Integers.
   */
  batch(sqlStatements: Array<string>, handler: (res: Array<number>, err?: Throwable) => void): SQLConnection;              

/**
   * Batch a prepared statement with all entries from the args list. Each entry is a batch.
 * The operation completes with the execution of the batch where the async result contains a array of Integers.
   */
  batchWithParams(sqlStatement: string, args: Array<any[]>, handler: (res: Array<number>, err?: Throwable) => void): SQLConnection;              

/**
   * Batch a callable statement with all entries from the args list. Each entry is a batch.
 * The size of the lists inArgs and outArgs MUST be the equal.
 * The operation completes with the execution of the batch where the async result contains a array of Integers.
   */
  batchCallableWithParams(sqlStatement: string, inArgs: Array<any[]>, outArgs: Array<any[]>, handler: (res: Array<number>, err?: Throwable) => void): SQLConnection;              

/**
   * Attempts to change the transaction isolation level for this Connection object to the one given.
 *
 * The constants defined in the interface Connection are the possible transaction isolation levels.
   */
  setTransactionIsolation(isolation: any, handler: (res: void, err?: Throwable) => void): SQLConnection;              

/**
   * Attempts to return the transaction isolation level for this Connection object to the one given.
   */
  getTransactionIsolation(handler: (res: any, err?: Throwable) => void): SQLConnection;    }                                    declare var SQLConnection: {}