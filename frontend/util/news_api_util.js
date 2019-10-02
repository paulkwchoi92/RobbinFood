import {keys} from "../../config"

export const fetchTopNews = () => {
  {
    return $.ajax({
      method: "GET",
      url: `https://newsapi.org/v2/top-headlines`,
      data: {
        category: "business",
        country: "us",
        apiKey: keys.newsAPIKey,
        pageSize: 5
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
        apiKey: keys.newsAPIKey,
        pageSize: 5
      }
    });
  }
};
