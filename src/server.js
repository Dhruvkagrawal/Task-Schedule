const express = require("express");
const app = express();
const connect = require("./Config/db");

app.use(express.json());

const start = async (PORT) => {
  await connect();
  app.listen(PORT, () => {
    console.log("Current Server is Running on PORT", PORT);
  });
};

module.exports = start;
