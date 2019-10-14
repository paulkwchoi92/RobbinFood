# [RobbinFood](https://robbinfood.herokuapp.com/)

### Technologies

- Ruby on Rails
- Redux.js
- React.js
- ReChart
- WorldTradingData API

### The Gist

RobbinFood will be a fullstack clone of [Robinhood](https://robinhood.com). This site will follow along the same operation as Robinhood with a twist that User will be given fake money to practice investing with real time data. Users will be able to discover insteresting articles/pages online and save them to boards with custom categories. Users may also follow the profiles of other users to gain inspiration and new ideas.

### Background and Overview

Pinergy lets users curate their feed with images leading to articles
Pinergy is a visual discovery engine for finding ideas like recipes, home and style inspiration, and more.

Home feed is the center of Pinergy. It's where you'll find ideas, or Pins, with recommendations based on user's interests, as well as what people user follows on Pinergy are saving.

### Features/Core Functionalities

#### \* Sign Up and Login

The user can signup for Pinergy using email, password(entered twice) and age. They are also asked to input their country, language and at least 5 interests after they sign up.
![Pinergy Signup Page](https://github.com/drexel-ue/pinergy/blob/master/signup1.png)

![Pinergy Signup Page2](https://github.com/drexel-ue/pinergy/blob/master/signup2.png)

#### \* Discover feed on home page

Home page shows a number of images(pins) based on user's areas of interests ( User inputs at least 5 interests during sign-up).
![Pinergy Home Page](https://github.com/drexel-ue/pinergy/blob/master/home.png)

#### \* Pins

Pins are ideas that people on Pinergy find and save from around the web. Each Pin links back to the website it was saved from. If the user's clicks through the Pin, user can learn how to make it or where to buy it.
![Pin Page](https://github.com/drexel-ue/pinergy/blob/master/pin.png)

#### \* Boards

The Pins users save live on your boards. Users can name boards and arrange them on their profile however they want. They can invite other people on Pinterest to collaborate on their boards to find even more ideas.
![Board Page](https://github.com/drexel-ue/pinergy/blob/master/profile.png)

#### Simple web scraper

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
