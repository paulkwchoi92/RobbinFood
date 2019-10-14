# [RobbinFood](https://robbinfood.herokuapp.com/)

### Technologies

- Ruby on Rails
- Redux.js
- React.js
- ReChart
- WorldTradingData API

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

#### \* Rechart


![Pinergy Signup Page](https://github.com/drexel-ue/pinergy/blob/master/signup1.png)

![Pinergy Signup Page2](https://github.com/drexel-ue/pinergy/blob/master/signup2.png)

#### \* Profile Page

Home page shows a number of images(pins) based on user's areas of interests ( User inputs at least 5 interests during sign-up).
![Pinergy Home Page](https://github.com/drexel-ue/pinergy/blob/master/home.png)

#### \* Stocks Show

Pins are ideas that people on Pinergy find and save from around the web. Each Pin links back to the website it was saved from. If the user's clicks through the Pin, user can learn how to make it or where to buy it.
![Pin Page](https://github.com/drexel-ue/pinergy/blob/master/pin.png)


The Pins users save live on your boards. Users can name boards and arrange them on their profile however they want. They can invite other people on Pinterest to collaborate on their boards to find even more ideas.
![Board Page](https://github.com/drexel-ue/pinergy/blob/master/profile.png)

### Difficulties and Solution

#### \* Creating Custom algorithm for User Profile Page
```javascript
const puppeteer = require("puppeteer");

exports.scrape = async url => {
  const browser = await puppeteer.launch(); // Opens a lightweight Chromium instance.

  try {
    const page = await browser.newPage(); // Opens a new tab in that instance.

    await page.goto(url); // Navigates to the provided url.

    await page.waitForSelector("img", { visible: true }); // Waits for an <img> tag to be available.

    const data = await page.evaluate(() => {
      const images = document.querySelectorAll("img"); // Selects all <img> elements.
      let urls = [...images].map(image => image.src); // Map the src attributes to an array.
      if (urls.length > 10) urls = urls.slice(0, 10); // Limit array length to 10.
      return urls;
    });

    browser.close();

    return data.slice(1);
  } catch (e) {
    browser.close();
    return e.toString();
  }
};
```
