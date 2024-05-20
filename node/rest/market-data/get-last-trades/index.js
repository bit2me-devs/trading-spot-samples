const PATH = '/v1/trading/trade/last';
const SERVER = process.env.BIT2ME_SERVER;

const main = async () => {
  try {
    const symbol = 'BTC/EUR';
    const limit = 10; // Optional, 50 by default

    const url = `${SERVER}${PATH}?symbol=${symbol}&limit=${limit}`;
    const response = await fetch(url);
    const lastTrades = await response.json();
    console.info(lastTrades);
  }
  catch (error) {
    console.error(error);
  }
};

main();
