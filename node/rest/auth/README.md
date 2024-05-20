# Authorization module library

This module is a commong dependency needed by private REST endpoints. You can found this dependnecy at different samples like:

```
  "dependencies": {
    "auth": "file:../../auth"
  }
```

This module lets us to generate required authorization HTTP headers `x-api-key`, `api-signature` and `nonce` by calling `getAuthHeaders` with a valid API Key, secret, url path and optional body:

```
const auth = require('auth');

const authHeaders = auth.getAuthHeaders(API_KEY, SECRET, '/v1/trading/wallet/balance');
console.info(authHeaders);
```

`apiKey` is the raw value generated from yout (Bit2Me account)[https://account.qa.bit2me.com/api-keys]. `nonce` value corresponds to the current value of the Unix timestamp in UTC and has a valid time window of 5 seconds. Finally, `signature` is a `base64` endoded hash from sha signature of `nonce`, `url` and `body`.

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