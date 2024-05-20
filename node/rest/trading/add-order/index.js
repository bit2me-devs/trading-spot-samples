const auth = require('auth');

const PATH = '/v1/trading/order';
const SERVER = process.env.BIT2ME_SERVER;
const API_KEY = process.env.BIT2ME_API_KEY;
const SECRET = process.env.BIT2ME_API_SECRET;

const main = async () => {
  try {
    const body = {
      side: 'buy',
      symbol: 'B2M/EUR',
      price: '0.08001',
      amount: '1000',
      orderType: 'limit'
    };
    
    const authHeaders = auth.getAuthHeaders(API_KEY, SECRET, PATH, body);
    const response = await fetch(`${SERVER}${PATH}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        ...authHeaders
      },
      body: JSON.stringify(body),
    });
    const order = await response.json();
    console.info(order);
  }
  catch (error) {
    console.error(error);
  }
};

main();
