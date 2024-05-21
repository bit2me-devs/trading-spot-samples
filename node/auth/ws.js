const restAuth = require('./rest');

const PATH = '/v1/signin/apikey';
const SERVER = process.env.BIT2ME_SERVER;
const API_KEY = process.env.BIT2ME_API_KEY;
const SECRET = process.env.BIT2ME_API_SECRET;

const wsAuthenticate = async (wsClient) => {
  const authToken = await getAuthToken();
  await wsClient.send(JSON.stringify({
    'event': 'authenticate',
    'token': authToken.token
  }));
};

const getAuthToken = async () => {
  const authHeaders = restAuth.getRestAuthHeaders(API_KEY, SECRET, PATH);

  const response = await fetch(`${SERVER}${PATH}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      ...authHeaders
    }
  });
  return (await response.json()).accessToken;
};

module.exports = {
  wsAuthenticate
};
