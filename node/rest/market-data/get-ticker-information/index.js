const headers = require('../headers');
const PATH = '/v2/trading/tickers';
const SERVER = process.env.BIT2ME_SERVER;

const main = async () => {
  try {
    const symbol = 'BTC/EUR'; // Optional, all market symbols by default

    const url = `${SERVER}${PATH}?symbol=${symbol}`;
    const response = await fetch(url, { headers: headers });
    const tickers = await response.json();
    console.info(tickers);
  }
  catch (error) {
    console.error(error);
  }
};

main();
