# Get my trades

Subscribe to my trades.

## Run

1. Install dependencies with `npm install`
2. Run the sample with `npm run start`

## Output

```
{
    "event": "my-trades",
    "symbol": "B2M/USDT",
    "data": {
        "id": "9adb20ae-f673-49a4-b232-75442e3af617",
        "timestamp": 1665997927993,
        "datetime": "2022-10-17T09:12:07.993Z",
        "symbol": "B2M/USDT",
        "order": "69d3df53-9248-430c-9850-d72ff1f0befa",
        "side": "sell",
        "price": 0.014,
        "amount": 100,
        "cost": 1.4,
        "fee": {
            "cost": 0.00224,
            "currency": "EUR",
            "rate": 0.16
        }
    }
}
```