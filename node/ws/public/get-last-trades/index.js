const WebSocket = require('ws');

const SERVER = process.env.BIT2ME_WS_SERVER;

const main = async () => {
  try {
    const wsClient = new WebSocket(SERVER);

    wsClient.on('open', async () => {
      const message = {
        'event': 'subscribe',
        'symbol': 'BTC/EUR',
        'subscription': { 'name': 'public-trades' }
      };
      wsClient.send(JSON.stringify(message));
    });

    wsClient.on('message', (trades) => {
      console.info(trades.toString());
    });
  }
  catch (error) {
    console.error(error);
  }
};

main();
