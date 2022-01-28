import { ServerRequest } from 'worktop/request';
import { ServerResponse } from 'worktop/response';
import { LoginBodyArgs } from './types';
import { AuthService } from '../services/authentication/auth.service';

export const LoginController = async (
  req: ServerRequest,
  res: ServerResponse,
): Promise<void> => {
  const loginBodyArgs = await req.body<LoginBodyArgs>();
  if (!loginBodyArgs) {
    res.send(400, { error: 'Please provide request body in the payload' });
    return;
  }
  const userInfo = await AuthService.verifyUserCredentials(loginBodyArgs);
  res.send(200, { message: `Login success for ${userInfo.email}` });
};
