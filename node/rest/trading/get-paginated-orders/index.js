const auth = require('auth');

const PATH = '/v1/trading/order';
const SERVER = process.env.BIT2ME_SERVER;
const API_KEY = process.env.BIT2ME_API_KEY;
const SECRET = process.env.BIT2ME_API_SECRET;

const main = async () => {
  try {
    const lastDays = 7;
    const symbol = 'BTC/EUR';
    const status = 'open';
    const sort = 'createdAt';
    const direction = 'desc';
    const startTime = new Date(Date.now() - lastDays * 24 * 60 * 60 * 1000).toISOString();
    const endTime = new Date().toISOString();
    const limit = 5;
    let offset = 0;
    let hasToLoadMoreOrders = true;

    while (hasToLoadMoreOrders) {
      const url = `${PATH}?symbol=${symbol}&offset=${offset}&limit=${limit}&sort=${sort}&direction=${direction}&status=${status}&startTime=${startTime}&endTime=${endTime}`;
      const authHeaders = auth.getRestAuthHeaders(API_KEY, SECRET, url);
      const response = await fetch(`${SERVER}${url}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          ...authHeaders
        }
      });
      const orders = await response.json();
      console.log(orders);

      offset += limit;
      hasToLoadMoreOrders = orders.length === limit;
    }
  }
  catch (error) {
    console.log(error);
  }
};

main();
