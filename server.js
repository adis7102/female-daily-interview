const express = require("express");
const request = require("request");
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const { query } = req
  const { product_name, _page, _limit, _sort, _order } = query || {};

  request(`https://shiny-lights-tease-203-190-247-242.loca.lt/products?${product_name ? `product_name=${product_name}&` : ""}_page=${_page}&_limit=${_limit}&_sort=${_sort}&_order=${_order}`, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body)
    } else {
      res.status(response.statusCode)
    }
  });
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
