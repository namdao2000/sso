import { listen, Router } from 'worktop';
import { ServerResponse } from 'worktop/response';
import { ServerRequest } from 'worktop/request';
import { PUBLIC_KEY_EXPORT } from './utils/constants';
import { LoginController } from './controllers/login.controller';
import { SignupController } from './controllers/signup.controller';
import { VerifyJWTController } from './controllers/VerifyJWT.controller';
import * as CORS from 'worktop/cors';
import { RootController } from './controllers/root.controller';

const router = new Router();
router.prepare = CORS.preflight({
  origin: '*',
});

router.add('GET', '/', RootController);
router.add('POST', '/login', LoginController);
router.add('POST', '/signup', SignupController);
router.add('POST', '/verify-jwt', VerifyJWTController);
router.add('GET', '/public-key', async (req: ServerRequest, res: ServerResponse) => {
  res.send(200, { key: PUBLIC_KEY_EXPORT });
});
listen(router.run);
