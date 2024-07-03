# Get executions

Subscribe to executions.

## Run

1. Install dependencies with `npm install`
2. Run the sample with `npm run start`

## Output

```
    {
        "event": "my-orders",
        "symbol": "B2M/USDT",
        "data": {
            "id": "51002851-2f76-4c10-9b4c-bcc131f27b1d",
            "timestamp": 1666006194005,
            "datetime": "2022-10-17T09:12:07.844Z",
            "side": "buy",
            "symbol": "B2M/USDT",
            "price": 1.4,
            "stopPrice": 0,
            "amount": 1000,
            "filled": 0,
            "remainingAmount": 1000
            "status": "open",
            "type": "market",
            "cost": 0
        }
    }

    {
        "event": "my-trades",
        "symbol": "B2M/USDT",
        "data": {
            "id": "9adb20ae-f673-49a4-b232-75442e3af617",
            "timestamp": 1665997927993,
            "datetime": "2022-10-17T09:12:07.993Z",
            "symbol": "B2M/USDT",
            "order": "51002851-2f76-4c10-9b4c-bcc131f27b1d",
            "side": "sell",
            "price": 0.014,
            "amount": 100,
            "cost": 1.4,
            "fee": {
                "cost": 0.00224,
                "currency": "EUR",
                "rate": 0.16
            },
        }
    }

    {
        "event": "my-orders",
        "symbol": "B2M/USDT",
        "data": {
            "id": "51002851-2f76-4c10-9b4c-bcc131f27b1d",
            "timestamp": 1666006194005,
            "datetime": "2022-10-17T09:12:07.993Z",
            "side": "buy",
            "symbol": "B2M/USDT",
            "price": 1,
            "stopPrice": 0,
            "amount": 1000,
            "filled": 100,
            "remainingAmount": 900
            "status": "filled",
            "type": "market",
            "cost": 0,
        }
    }
```