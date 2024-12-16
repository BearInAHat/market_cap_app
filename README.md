# Start & watch
1. Your node version must be equal to or higher than v20.9.0
2. Run `yarn install` to install the dependencies
3. Оn the route "/apps/server" create a file .env and add the following variables:
    PORT= * (optional)
    COIN_MARKET_CAP_API_KEY= * (required, coin market cap api key for correct display of data)
3. Run `yarn lint` to start the ESLint Fix
4. Run `yarn start` to start the market-cap-app

# Dev policy:
1. Use .ts/tsx files only!