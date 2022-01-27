import { ServerRequest } from 'worktop/request';
import { ServerResponse } from 'worktop/response';

export const SignupController = async (
  req: ServerRequest,
  res: ServerResponse,
): Promise<void> => {
  res.send(200, { message: 'signup page!' });
};
