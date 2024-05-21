const WebSocket = require('ws');

const SERVER = process.env.BIT2ME_WS_SERVER;

const main = async () => {
  try {
    const wsClient = new WebSocket(SERVER);

    wsClient.on('open', async () => {
      const message = {
        'event': 'subscribe',
        'symbol': 'BTC/EUR',
        'subscription': { 'name': 'order-book' }
      };
      wsClient.send(JSON.stringify(message));
    });

    wsClient.on('message', (orderBook) => {
      console.info(orderBook.toString());
    });
  }
  catch (error) {
    console.error(error);
  }
};

main();
