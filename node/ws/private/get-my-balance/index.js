const WebSocket = require('ws');
const auth = require('auth');

const SERVER = process.env.BIT2ME_WS_SERVER;

const main = async () => {
  try {
    const wsClient = new WebSocket(SERVER);

    wsClient.on('open', async () => {
      await auth.authenticate(wsClient);

      const message = {
        "event":"subscribe",
        "subscription":{"name":"my-balance"}
    };
      wsClient.send(JSON.stringify(message));
    });

    wsClient.on('message', (order) => {
      console.info(order.toString());
    });
  }
  catch (error) {
    console.error(error);
  }
};

main();
