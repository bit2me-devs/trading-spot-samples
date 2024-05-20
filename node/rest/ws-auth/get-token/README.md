# Get token

An authentication token must be requested via this REST API endpoint in order to connect to and authenticate with our WebSockets API. The token should be used within 1 minute of creation, but it does not expire once a successful WebSockets connection and private subscription has been made and is maintained.

## Run

1. Install dependencies with `npm install`
2. Run the sample with `npm run start`