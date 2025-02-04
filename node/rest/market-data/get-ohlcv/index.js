const headers = require('../headers');
const PATH = '/v1/trading/candle';
const SERVER = process.env.BIT2ME_SERVER;

const main = async () => {
  try {
    const symbol = 'BTC/EUR';
    const interval = '5'; // Each interval aggregates values from 5 minutes
    const startTime = Date.now() - 60 * 60; // 1 hour ago
    const endTime = Date.now();
    const limit = 10; // 10 intervals

    const url = `${SERVER}${PATH}?symbol=${symbol}&interval=${interval}&startTime=${startTime}&endTime=${endTime}&limit=${limit}`;
    const response = await fetch(url, { headers: headers });
    const ohlcv = await response.json();
    console.info(ohlcv);
  }
  catch (error) {
    console.error(error);
  }
};

main();
