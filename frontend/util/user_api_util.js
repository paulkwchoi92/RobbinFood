
export const fetchUserDetail = id =>
  $.ajax({
    method: "GET",
    url: `api/users/${id}`
  });