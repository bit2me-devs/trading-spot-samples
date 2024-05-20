const PATH = '/v1/trading/market-config';
const SERVER = process.env.BIT2ME_SERVER;

const main = async () => {
  try {
    const symbol = 'BTC/EUR'; // Optional, all market symbols by default

    const url = `${SERVER}${PATH}?symbol=${symbol}`;
    const response = await fetch(url);
    const marketData = await response.json();
    console.info(marketData);
  }
  catch (error) {
    console.error(error);
  }
};

main();
