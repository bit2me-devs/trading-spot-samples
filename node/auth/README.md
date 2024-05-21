# Authorization module library

This module is a common dependency needed by private REST endpoints. You can found this dependency at different samples like:

```
  "dependencies": {
    "auth": "file:../../../auth"
  }
```

## REST

This module lets us to generate required authorization HTTP headers `x-api-key`, `api-signature` and `nonce` by calling `getAuthHeaders` with a valid API Key, secret, url path and optional body:

```
const auth = require('auth');

const authHeaders = auth.getRestAuthHeaders(API_KEY, SECRET, '/v1/trading/wallet/balance');
console.info(authHeaders);
```

`apiKey` is the raw value generated from yout [Bit2Me account](https://account.bit2me.com/api-keys). `nonce` value corresponds to the current value of the Unix timestamp in UTC and has a valid time window of 5 seconds. Finally, `signature` is a `base64` endoded hash from sha signature of `nonce`, `url` and `body`.

It's necessary to take into account that the body included in the message to sign, must not include empty spaces in key pair values. Following sample shows how this message to sign is generated from `nonce`, `url` and `body` when we have to add order with REST API `POST /v1/trading/order`:
```
const nonce = 1687155308;
const url = '/v1/trading/order';
const body = {
  side: "sell",
  symbol: "B2M/EUR",
  price: "0.09999",
  amount: "5001.00000000",
  orderType: "limit"
};

// WRONG. Has blank spaces after colons.
const messageToSign = '1687155308:/v1/trading/order:{"side": "sell","symbol": "B2M/EUR","price": "0.09999","amount": "5001.00000000","orderType": "limit"}';

// WRONG. Has blank spaces after commas.
const messageToSign = '1687155308:/v1/trading/order:{"side":"sell", "symbol":"B2M/EUR", "price":"0.09999", "amount":"5001.00000000", "orderType":"limit"}';

// RIGHT. No blank spaces
const messageToSign = '1687155308:/v1/trading/order:{"side":"sell","symbol":"B2M/EUR","price":"0.09999","amount":"5001.00000000","orderType":"limit"}';
```

## Websocket

If the user wants to subscribe to private channels or the user wants to send commands to manage orders, then the user must be authenticated.

1. The user needs a token. To get the token the user should call `https://gateway.bit2me.com/v1/signin/apikey`
2. The user has to send the following command to our Websockets server to login:

```
{
    "event":"authenticate",
    "token":"the-token"
}
```

If the user has been authenticated then the server will response with this message:
```
{
    "event":"authenticate"
}
```