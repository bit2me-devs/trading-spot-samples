# Bit2Me Trading Spot API sample library

## Prerequisites

Generate a new API Key from yout [Bit2Me account](https://account.bit2me.com/api-keys). Once the new key is generated, you must copy the value of the key and the secret to the local environment file `.env`:

```
BIT2ME_SERVER=https://gateway.bit2me.com
BIT2ME_API_KEY="HERE_YOUR_API_KEY"
BIT2ME_API_SECRET="HERE_YOUR_SECRET"
```

> Important Note: Do not reveal your `API Key` and `secret` to anyone. They are as important as your password.

## Node

* [API REST samples](/node/rest/)
* [API Websocket samples](/node/ws/)

### Authorization

[Auth module](/node/auth/) is a library needed to authorize private API (REST and Websocket) calls with API Key. This module lets us to generate required authorization HTTP headers `x-api-key`, `api-signature` and `nonce` by calling `getAuthHeaders` with a valid API Key, secret, url path and optional body.