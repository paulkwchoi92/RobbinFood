import moment from "moment";

export const fetchStock = symbol => (
  $.ajax({
    method: "GET",
    url: `api/stocks/${symbol}`
  })
);





export const getSearch = () => (
  $.ajax({
    method: "GET",
    url: `api/stocks/`
  })
);

export const watchStock = (id, symbol) => (
  $.ajax({
    method: "POST",
    url: `api/stock_watches`,
    data: {
      stock_watch: { user_id: id, symbol }
    }
  })
);


export const deleteWatch = id => (
  $.ajax({
    method: "DELETE",
    url: `api/stock_watches/${id}`
  })
);
