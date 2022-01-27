import { listen, Router } from 'worktop';
import { ServerResponse } from 'worktop/response';
import { ServerRequest } from 'worktop/request';
import { PUBLIC_KEY_EXPORT } from './utils/constants';
import { LoginController } from './controllers/login.controller';
import { SignupController } from './controllers/signup.controller';

const router = new Router();

router.add('GET', '/', async (req: ServerRequest, res: ServerResponse) => {
  res.send(200, { message: 'This is an sso server. Documentations are WIP' });
});
router.add('POST', '/login', LoginController);
router.add('POST', '/signup', SignupController);
router.add('GET', '/public-key', async (req: ServerRequest, res: ServerResponse) => {
  res.send(200, { key: PUBLIC_KEY_EXPORT });
});

listen(router.run);
