/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="./session_store" />
/// <reference path="../vertx-js/vertx" />

declare module "vertx-web-js/clustered_session_store" {
  export = ClusteredSessionStore;
}

/**
 * A session store which stores sessions in a distributed map so they are available across the cluster.
 */
declare interface ClusteredSessionStore extends SessionStore {

}

declare var ClusteredSessionStore: {

  /**
   * Create a session store
   */
  create(vertx: Vertx, sessionMapName: string): ClusteredSessionStore;

  /**
   * Create a session store.<p/>
   *
   * The retry timeout value, configures how long the session handler will retry to get a session from the store
   * when it is not found.
   */
  create(vertx: Vertx, sessionMapName: string, retryTimeout: number): ClusteredSessionStore;

  /**
   * Create a session store
   */
  create(vertx: Vertx): ClusteredSessionStore;

  /**
   * Create a session store.<p/>
   *
   * The retry timeout value, configures how long the session handler will retry to get a session from the store
   * when it is not found.
   */
  create(vertx: Vertx, retryTimeout: number): ClusteredSessionStore;

}