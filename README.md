# Stock Information App

This is a web application that allows you to search for a stock's ticker and returns general information as well as the past 12 month's of daily price data visualized on a graph.

## Technology Stack

- Google Cloud Platforms/Firebase
- NodeJS
- ExpressJS
- ReactJS
- Python

## Comments

The web application is built on ReacJS, hosted on Firebase, and utilzes Google Cloud Functions to pull and retrieve stock information based on the `yfinance` Python package. `yfinance` is a custom solution to the depreciated Yahoo Finance API platform; however, it is not an enterprise package and contains known issue. Issues include incomplete information on a stock ticker as well as no information on a stock ticker.

Within the web application, if a ticker is not present within the `yfinance` universe, then an error snackbar will pop-up, alerting the user. Furthermore, if a stock exists in the universe but contains incomplete information, that section of information will be rendered blank.

Link to the hosted website here: [https://stock-app-544c0.web.app/](https://stock-app-544c0.web.app/)
