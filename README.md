# [RobbinFood](https://robbinfood.herokuapp.com/)

### Technologies

- Ruby on Rails
- Redux.js
- React.js
- ReChart
- WorldTradingData API
- News Api

### The Gist

RobbinFood will be a fullstack clone of [Robinhood](https://robinhood.com). This site will follow along the same operation as Robinhood with a twist that User will be given fake money to practice investing with real time data. as.

### Site Features

- Account creation/User authentication
- Detailed information and performance charts for over 8000 publically    traded stocks
- Real-time stock data provided by the WorldTradingData
- Interactive, time-sentitive chart rendering using Moment.js and Recharts
- Relevant business and individual stock-related news provided by the News API
- Ability to add to and remove stocks from a user's watchlist
- Ability to 'buy' and 'sell' stocks within RobbinFood's environment.

### Features/Core Functionalities


#### \* Profile Page

Profile page renders timely data of User's portfolio value. Using tooltips from Rechart.js user can accurately see timely fluctuations of their holdings.

![User Profile](https://github.com/paulkwchoi92/RobbinFood/blob/master/Profile.png)

#### \* Stocks Show & Transactions

At the cost of initial load time, stocks data for historical charts are requested all at serverside in order to get instant response between chart changing.

When viewing the stocks, will have the option to view most current stock price.


![Stocks Show Page](https://github.com/paulkwchoi92/RobbinFood/blob/master/StockShow.png)







