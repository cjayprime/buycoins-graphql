# BuyCoins (buycoins.africa challenge)
This is the solution to the Buy coins code challenge for the position of Backend Software Engineer.
READ the instructions below:

You have to complete **BOTH** challenges.

## Aptitude Test

We would like you to complete an aptitude test. It's a short 15 minute quiz designed to test for logic, comprehension and communication skills. [Click here to begin](https://www.ondemandassessment.com/link/index/JB-HB1AGTYC4?u=172509).

## Coding Challenge

You're going to create a GraphQL API with one query. The query `calculatePrice` will accept three required arguments:

- `type`: This can either be `buy` or `sell`, nothing else.
- `margin`: This is a percentage that will be used in a calculation. Not a fraction, a percentage. For example, if `0.2` is passed into this argument, then the calculation should be done with 0.2%.
- `exchangeRate`: This is a custom USD/NGN exchange rate that will be used in the calculation detailed below.

### The calculation

- When `calculatePrice` is called, your API must make a request to [Coindesk's API](https://www.coindesk.com/api) to retrieve **the current price of Bitcoin** in USD.
- If the `type` is `sell`, then your API should **subtract** the computed value of the `margin` percentage from the current Bitcoin price it just retrieved.
- If the `type` is `buy`, then your API should **add** the computed value of the `margin` percentage to the current Bitcoin price it just retrieved.
- Finally, the **number** `calculatePrice` responds will be in NGN and not USD. This should be calculated using the `exchangeRate` argument.

### Other important things

- Your API must mount a GraphiQL interface at `/graphiql`.
- Cleanliness, readability of code and good separation of concerns are very important with this challenge.
- Writing [good] tests is recommended and will attract extra points!
- Host the API wherever you want. Heroku is a good place to host something like this for free.


## About The Solution
The app is deployed [here](https://**.herokuapp.com/graphql) (https://buycoins-challenge.herokuapp.com/graphql)

# To Run The Test Follow These Steps:
1. ``yarn start``
2. ``yarn test``
