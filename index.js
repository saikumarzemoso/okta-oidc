const open = require('open');
const express = require('express');
const querystring = require('querystring');

const app = express();
const port = 8000;

const clientId = '0oahpnhej74xu8kcQ5d7';
const redirectUri = 'http://localhost:8000/callback'; // Change to your actual redirect URI
const authEndpoint = 'https://dev-43056703.okta.com/oauth2/default/v1/authorize';
const scope = 'openid profile email'; // Adjust scopes as needed
const responseType = 'code';
const state = 'RANDOM_STRING_FOR_SECURITY1';

const authUrl = `${authEndpoint}?${querystring.stringify({
  client_id: clientId,
  redirect_uri: redirectUri,
  response_type: responseType,
  scope: scope,
  state: state,
})}`;
/*
app.get('/callback', (req, res) => {
  const authorizationCode = req.query.code;
  const state = req.query.state;

  if (authorizationCode) {
    console.log('Authorization Code:', authorizationCode);
    // Here you would exchange the authorization code for tokens
    res.send('Authorization code received. You can now close this window.');
  } else {
    res.send('Authorization code not found.');
  }
});

*/

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  open(authUrl);
});



