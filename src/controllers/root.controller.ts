const html = `<!DOCTYPE html>
<body>
  <h1>Serverless SSO Service, implemented on Cloudflare workers</h1>
  <p>To see the api documentation, please go to: <a href='https://sso-api-doc.namdao.dev' target='_blank' rel="noopener noreferrer">https://sso-api-doc.namdao.dev</a></p>
  <p>Made with ❤️ by Nam Dao 2022</p>
</body>`;

export const RootController = async (): Promise<Response> => {
  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  });
};
