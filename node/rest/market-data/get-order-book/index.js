const headers = require('../headers');
const PATH = '/v2/trading/order-book';
const SERVER = process.env.BIT2ME_SERVER;

const main = async () => {
  try {
    const symbol = 'BTC/EUR';

    const url = `${SERVER}${PATH}?symbol=${symbol}`;
    const response = await fetch(url, { headers: headers });
    const orderBook = await response.json();
    console.info(orderBook);
  }
  catch (error) {
    console.error(error);
  }
};

main();
