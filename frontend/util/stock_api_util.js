import moment from "moment";

export const searchStock = symbol =>
  $.ajax({
    method: "GET",
    url: `api/stocks/${symbol}`
  });

export const getIntradayData = symbol =>
  $.ajax({
    method: "GET",
    url: `https://intraday.worldtradingdata.com/api/v1/intraday`,
    data: {
      symbol: symbol,
      range: 1,
      interval: 5,
      api_token: zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A
    }
  });

export const getHistoryData = symbol => {
  const dateEnd = moment()
    .subtract(5, "years")
    .format("YYYY-MM-DD");
  return $.ajax({
    method: "GET",
    url: `https://api.worldtradingdata.com/api/v1/history`,
    data: {
      symbol: symbol,
      date_from: dateEnd,
      api_token: zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A
    }
  });
};

export const getStockInfo = symbol => {
  return $.ajax({
    method: "GET",
    url: `https://api.worldtradingdata.com/api/v1/stock`,
    data: {
      symbol: symbol,
      api_token: zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A
    }
  });
};

export const getSearch = () =>
  $.ajax({
    method: "GET",
    url: `api/stocks/`
  });

export const watchStock = (id, symbol) =>
  $.ajax({
    method: "POST",
    url: `api/stock_watches`,
    data: {
      stock_watch: { user_id: id, symbol }
    }
  });

export const deleteWatch = id =>
  $.ajax({
    method: "DELETE",
    url: `api/stock_watches/${id}`
  });
