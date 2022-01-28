# Description

[Live Demo](https://sso.namdao.dev/)

This is a Serverless SSO service for my web applications. Its powered by Bcryptjs for password hashing, Jose for JWT and [Worktop's Router](https://github.com/lukeed/worktop) for routing HTTP requests.

Due to the limitation of the worker's 10ms cpu limit, passwords are only hashed up to 5 salt rounds (The recommended is 10). Users info are stored in Workers KV, a globally distributed, eventually consistent key value store.

This costs $0 to maintain, due to Cloudflare's generous workers free teir (100,000 req/day). Noice 😎
## Endpoints
[Full API Documentation](https://sso-api-doc.namdao.dev/)
#### - GET /public-key
#### - POST /login
#### - POST /signup
#### - POST /verify-jwt

## Running in development

1. Make sure you have `wrangler` and `nvm` installed. 
2. Run `nvm install` to install the correct Nodejs version.
3. Run `sh generate-ecdsa-keypair.sh`. This will create an `.env` file and add `PUBLIC_KEY` and `PRIVATE_KEY` to it.
5. Run `npm run dev`.

## Deploying to production
1. Make sure you have `wrangler` and `nvm` installed.
2. Run `nvm install` to install the correct Nodejs version.
3. Go to the Workers dashboard, create a new project called `sso`.
4. Go to the Workers KV dashboard, make sure `USER` namespace is created.
5. Run `wrangler secret put PUBLIC_KEY` and type in your public key.
6. Run `wrangler secret put PRIVATE_KEY` and type in your private key.
7. Run `wrangler publish`.

#### [MIT LICENSE](LICENSE)