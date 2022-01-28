import { ServerRequest } from 'worktop/request';
import { ServerResponse } from 'worktop/response';
import { AuthService } from '../services/authentication/auth.service';
import { asyncErrorHandler } from '../services/http-error/http-error-response.service';

export const VerifyJWTController = async (
  req: ServerRequest,
  res: ServerResponse,
): Promise<void> => {
  await asyncErrorHandler(res, async () => {
    const result = await req.body<{ token: string }>();
    if (!result) {
      res.send(400, { error: 'Please provide request body in the payload' });
      return;
    }
    const { token } = result;
    const jwtResult = await AuthService.verifyJWT(token);
    res.send(200, {
      message: 'The token is valid',
      expiry: jwtResult.payload.exp,
      email: jwtResult.payload.email,
    });
  });
};
