# Get my orders

Subscribe to my orders.

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
        "datetime": "2022-10-17T11:29:54.005Z",
        "side": "buy",
        "symbol": "B2M/USDT",
        "price": 1,
        "stopPrice": 0,
        "amount": 1000,
        "filled": 10,
        "remainingAmount": 990,
        "status": "cancelled",
        "type": "limit",
        "cost": 0,
        "cancelationReason": "The buy price can not be greater or equal than the best ask price"
    }
}
```