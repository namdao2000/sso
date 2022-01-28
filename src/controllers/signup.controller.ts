import { ServerRequest } from 'worktop/request';
import { ServerResponse } from 'worktop/response';
import { AuthService } from '../services/authentication/auth.service';
import { SignUpBodyArgs } from './types';
import { asyncErrorHandler } from '../services/http-error/http-error-response.service';

export const SignupController = async (
  req: ServerRequest,
  res: ServerResponse,
): Promise<void> => {
  await asyncErrorHandler(res, async () => {
    const signUpBodyArgs = await req.body<SignUpBodyArgs>();
    if (!signUpBodyArgs) {
      res.send(400, { error: 'Please provide request body in the payload' });
      return;
    }
    const ip = req.headers.get('CF-Connecting-IP') || undefined;
    await AuthService.createNewUser({ ...signUpBodyArgs, ip });
    const token = AuthService.generateJWT(signUpBodyArgs.email);
    res.send(201, {
      message: `Successfully created the user ${signUpBodyArgs.email}`,
      token,
    });
  });
};
