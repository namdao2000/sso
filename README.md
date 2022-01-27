# Description

[Live Demo](https://oauth.namdao.workers.dev/)

This is a SSO service for my web applications Powered by Bcrypt and jsonwebtoken.
Powered by [Worktop's Router](https://github.com/lukeed/worktop).

## Endpoints

#### GET /public-key
Takes in a url parameter and returns a signed version of the URL, ready to be verified by the `/verify` end point.
Expiry time is configurable.

#### GET /login
#### GET /signup

## Running in development

1. Make sure you have `wrangler` and `nvm` installed. 
2. Run `nvm install` to install the correct Nodejs version.
3. Create a `.env` file and add `PUBLIC_KEY=YOUR PUBLIC KEY` and `PRIVATE_KEY=YOUR PRIVATE KEY`
4. Run `npm run dev`

## Deploying to production
1. Make sure you have `wrangler` and `nvm` installed.
2. Run `nvm install` to install the correct Nodejs version.
3. Go to the Workers dashboard, create a new project called `oauth`.
4. Run `wrangler secret put PUBLIC_KEY` and type in your public key.
5. Run `wrangler secret put PRIVATE_KEY` and type in your private key.
6. Run `wrangler publish`.

#### [MIT LICENSE](LICENSE)