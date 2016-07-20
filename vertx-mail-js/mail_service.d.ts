/// <reference path="../vertx-js/globals.d.ts" />
/// <reference path="../vertx-js/vertx" />
/// <reference path="./mail_client" />

declare module "vertx-mail-js/mail_service" {
  export = MailService;
}

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */

declare interface MailService
  extends MailClient
{
  sendMail(email: any, resultHandler: (res: any, err?: Throwable) => void): MailService;
  close(): void;
}

declare var MailService: {

  /**
   * create a proxy of  MailService that delegates to the mail service running somewhere else via the event bus
   */
  createEventBusProxy(vertx: Vertx, address: string): MailService;
}
