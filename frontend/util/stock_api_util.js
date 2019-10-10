import moment from "moment";
import tz from "moment-timezone";

export const fetchStock = symbol =>
  $.ajax({
    method: "GET",
    url: `api/stocks/${symbol}`
  });

export const fetchAllStocks = () =>
  $.ajax({
    method: "GET",
    url: `api/stocks`
  });



export const watchStock = watchlist =>
  $.ajax({
    method: "POST",
    url: `api/watchlists`,
    data: { watchlist }
  });

export const deleteWatch = id =>
  $.ajax({
    method: "DELETE",
    url: `api/watchlists/${id}`
  });

export const makeTransaction = transaction =>
  $.ajax({
    method: "POST",
    url: `api/transactions/`,
    data: { transaction }
  });
export const getIntradayChart = symbol => (
  $.ajax({
    method: "GET",
    url: `https://intraday.worldtradingdata.com/api/v1/intraday`,
    data: {
      symbol: symbol,
      range: 1,
      interval: 5,
      api_token: "zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A"
    }
  })
);

export const getHistoricalChart = symbol => {
  const dateEnd = moment().subtract(5, 'years').format("YYYY-MM-DD");
  return $.ajax({
    method: "GET",
    url: `https://www.worldtradingdata.com/api/v1/history`,
    data: {
      symbol: symbol,
      date_from: dateEnd,
      api_token: "zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A"
    }
  });
};

export const getInfo = symbol => {
  return $.ajax({
    method: "GET",
    url: `https://www.worldtradingdata.com/api/v1/stock`,
    data: {
      symbol: symbol,
      api_token: "zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A"
    }
  }).then(info => info.data[0]);
};
