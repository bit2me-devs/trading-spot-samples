# Get last trades

Subscribe to last trades associated to the market symbol.

## Run

1. Install dependencies with `npm install`
2. Run the sample with `npm run start`

## Output

```
{
  "event": "subscribe",
  "symbol": "BTC/EUR",
  "subscription": {
    "name": "public-trades"
  },
  "result": "subscribed"
}

{
  "event": "public-trades",
  "symbol": "BTC/EUR",
  "data": {
    "side": "buy",
    "price": 65346.1,
    "amount": 0.00911238,
    "timestamp": 1716288547800
  }
}
...
```