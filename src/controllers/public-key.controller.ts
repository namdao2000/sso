import { ServerRequest } from 'worktop/request';
import { ServerResponse } from 'worktop/response';
import { PUBLIC_KEY_EXPORT } from '../utils/constants';

export const PublicKeyController = async (
  req: ServerRequest,
  res: ServerResponse,
): Promise<void> => {
  res.send(200, { publicKey: PUBLIC_KEY_EXPORT });
};
