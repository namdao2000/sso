import { ErrorCode, IHttpErrorResponse } from './types';
import { ServerResponse } from 'worktop/response';

export const asyncErrorHandler = async (
  res: ServerResponse,
  callback: () => Promise<void>,
): Promise<void> => {
  try {
    await callback();
  } catch (e) {
    const error = e as IHttpErrorResponse;
    if (!error.status) res.send(500, getHttpErrorResponse(ErrorCode.UNKNOWN_ERROR));
    res.send(error.status, {
      status: error.status,
      message: error.message,
      errorCode: error.errorCode,
    });
  }
};

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
    case ErrorCode.UNKNOWN_ERROR: {
      response.status = 500;
      response.message =
        'An unknown error has occurred while processing your request. Please try again later.';
      break;
    }
  }

  return response;
};
