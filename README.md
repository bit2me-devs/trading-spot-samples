# Bit2Me Trading Spot API sample library

## Prerequisites

Generate a new API Key from yout [Bit2Me account](https://account.bit2me.com/api-keys). Once the new key is generated, you must copy the value of the key and the secret to the local environment file `.env`:

```
BIT2ME_SERVER=https://gateway.bit2me.com
BIT2ME_API_KEY="HERE_YOUR_API_KEY"
BIT2ME_API_SECRET="HERE_YOUR_SECRET"
```

> Important Note: Do not reveal your `API Key` and `secret` to anyone. They are as important as your password.

## REST

### Market Data
* [GET markets](/node/rest/market-data/get-markets/)
* [GET OHLCV (open, highest, lowest, close, volume)](/node/rest/market-data/get-ohlcv/)
* [GET order book](/node/rest/market-data/get-order-book/)
* [GET ticker information](/node/rest/market-data/get-ticker-information/)
* [GET last trades](/node/rest/market-data/get-last-trades/)

### Trading
* [ADD order](/node/rest/trading/add-order/)
* [GET orders](/node/rest/trading/get-orders/)
  * [GET paginated and sorted orders by symbol](/node/rest/trading/get-paginated-orders/)
* [GET trades](/node/rest/trading/get-trades/)

### Funding
* [GET balance](/node/rest/funding/get-balance/)

### WebSocket Authentication
* [GET token](/node/rest/ws-auth/get-token/)

## Authorization

[Auth module](/node/rest/auth/) is a library needed to authorize private API calls with API Key. This module lets us to generate required authorization HTTP headers `x-api-key`, `api-signature` and `nonce` by calling `getAuthHeaders` with a valid API Key, secret, url path and optional body.