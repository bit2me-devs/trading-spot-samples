const auth = require('auth');

const PATH = '/v1/trading/trade';
const SERVER = process.env.BIT2ME_SERVER;
const API_KEY = process.env.BIT2ME_API_KEY;
const SECRET = process.env.BIT2ME_API_SECRET;

const main = async () => {
  try {    
    const authHeaders = auth.getAuthHeaders(API_KEY, SECRET, PATH);
    const response = await fetch(`${SERVER}${PATH}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        ...authHeaders
      }
    });
    const trades = await response.json();
    console.info(trades.data.length);
  }
  catch (error) {
    console.error(error);
  }
};

main();
