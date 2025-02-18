import { HttpStatusCode } from "./http-status-code";

export class InvalidParamsError extends Error {
  httpStatusCode: HttpStatusCode;
  constructor(message: string, httpStatusCode: HttpStatusCode) {
    super(message);
    this.name = 'InvalidParamsError';
    this.httpStatusCode = httpStatusCode;
  }
}

