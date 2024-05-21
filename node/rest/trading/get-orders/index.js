const auth = require('auth');

const PATH = '/v1/trading/order';
const SERVER = process.env.BIT2ME_SERVER;
const API_KEY = process.env.BIT2ME_API_KEY;
const SECRET = process.env.BIT2ME_API_SECRET;

const main = async () => {
  try {    
    const authHeaders = auth.getRestAuthHeaders(API_KEY, SECRET, PATH);
    const response = await fetch(`${SERVER}${PATH}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        ...authHeaders
      }
    });
    const orders = await response.json();
    console.info(orders);
  }
  catch (error) {
    console.error(error);
  }
};

main();
