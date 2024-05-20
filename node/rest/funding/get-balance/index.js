const auth = require('auth');

const PATH = '/v1/trading/wallet/balance';
const SERVER = process.env.BIT2ME_SERVER;
const API_KEY = process.env.BIT2ME_API_KEY;
const SECRET = process.env.BIT2ME_API_SECRET;

const main = async () => {
  try {
    const assetSymbol = 'BTC,B2M,EUR'; // Optional, all asset symbols by default
    const filteredPath = `${PATH}?symbols=${assetSymbol}`;

    const authHeaders = auth.getAuthHeaders(API_KEY, SECRET, filteredPath);
    const response = await fetch(`${SERVER}${filteredPath}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        ...authHeaders
      }
    });
    const balance = await response.json();
    console.info(balance);
  }
  catch (error) {
    console.error(error);
  }
};

main();
