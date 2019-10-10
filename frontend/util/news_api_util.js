const keys = require("../../config/keys/keys")
// console.log(keys)
export const fetchTopNews = () => {
  {
    return $.ajax({
      method: "GET",
      url: `https://newsapi.org/v2/top-headlines`,
      data: {
        category: "business",
        country: "us",
        apiKey: "bb67bedddb454b0bae6d54e125e65d2e",
        pageSize: 15
      }
    });
  }
};

export const fetchCompanyNews = name => {
  {
    return $.ajax({
      method: "GET",
      url: `https://newsapi.org/v2/everything`,
      data: {
        q: name,
        language: "en",
        apiKey: "bb67bedddb454b0bae6d54e125e65d2e",
        pageSize: 5
      }
    });
  }
};
