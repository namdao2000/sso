export enum ErrorCode {
  MISSING_AUTH_TOKEN = 'MISSING_AUTH_TOKEN',
  INVALID_TOKEN = 'INVALID_TOKEN',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  USERNAME_TAKEN = 'USERNAME_TAKEN',
  UNAUTHORIZED_ACTION = 'UNAUTHORIZED_ACTION',
  DIARY_PAGE_NON_EXISTENT = 'DIARY_PAGE_NON_EXISTENT',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  BAD_REQUEST = 'BAD_REQUEST',
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
