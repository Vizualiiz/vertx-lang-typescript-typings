/// <reference path="./globals.d.ts" />

declare module "vertx-js/measured" {
  export = Measured;
}

/**
 * @author <a href="mailto:nscavell@redhat.com">Nick Scavelli</a>
 */

declare interface Measured
{

  /**
   * Whether the metrics are enabled for this measured object
   */
  isMetricsEnabled(): boolean;
}

declare var Measured: {
}
