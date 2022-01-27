import { ErrorCode, IHttpErrorResponse } from './types';

export const getHttpErrorResponse = (errorCode: ErrorCode): IHttpErrorResponse => {
  const response: IHttpErrorResponse = {
    status: 400,
    message: errorCode,
    errorCode: errorCode,
  };
  switch (errorCode) {
    case ErrorCode.INVALID_CREDENTIALS: {
      response.status = 401;
      response.message = 'Your username or password is invalid';
      break;
    }
    case ErrorCode.INVALID_TOKEN: {
      response.status = 401;
      response.message = 'Your Auth token is invalid.';
      break;
    }
    case ErrorCode.MISSING_AUTH_TOKEN: {
      response.status = 401;
      response.message = 'Your header is missing Bearer Token';
      break;
    }
    case ErrorCode.USERNAME_TAKEN: {
      response.status = 409;
      response.message =
        'New account cannot be created because the username provided has been taken.';
      break;
    }
    case ErrorCode.UNAUTHORIZED_ACTION: {
      response.status = 403;
      response.message = 'You are unauthorized to perform this action.';
      break;
    }
    case ErrorCode.DIARY_PAGE_NON_EXISTENT: {
      response.status = 404;
      response.message = 'The resource you requested was not found.';
      break;
    }
    case ErrorCode.UNKNOWN_ERROR: {
      response.status = 500;
      response.message =
        'An unknown error has occurred while processing your request. Please try again later.';
      break;
    }
  }

  return response;
};