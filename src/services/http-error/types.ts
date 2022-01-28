export enum ErrorCode {
  MISSING_AUTH_TOKEN = 'MISSING_AUTH_TOKEN',
  INVALID_TOKEN = 'INVALID_TOKEN',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  EMAIL_TAKEN = 'EMAIL_TAKEN',
  UNAUTHORIZED_ACTION = 'UNAUTHORIZED_ACTION',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export interface IHttpErrorResponse {
  status: number;
  message: string;
  errors?: [];
  errorCode: ErrorCode;
}

export class HttpError extends Error {
  private status: number;
  private errorCode: ErrorCode;

  constructor(args: IHttpErrorResponse) {
    super(args.message);
    this.status = args.status;
    this.errorCode = args.errorCode;
  }
}
