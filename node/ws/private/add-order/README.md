# Add order

Place a new order.

## Run

1. Install dependencies with `npm install`
2. Run the sample with `npm run start`

## Output

```
{
  "event": "authenticate"
}

{
  "event": "added-order",
  "symbol": "B2M/USDT",
  "data": {
    "id": "e4145749-8c65-4aee-89f8-a622ecb59981",
    "userId": "2bf436fc-43e6-459a-b647-6b446f72ad96",
    "side": "buy",
    "symbol": "B2M/USDT",
    "price": 0.001,
    "orderAmount": 1000,
    "filledAmount": 0,
    "status": "open",
    "orderType": "limit",
    "cost": 0,
    "createdAt": "2024-05-21T11:38:37.789Z",
    "updatedAt": "2024-05-21T11:38:37.789Z",
    "stopPrice": 0,
    "clientOrderId": null,
    "cancelReason": null,
    "timeInForce": "GTC"
  }
}
```