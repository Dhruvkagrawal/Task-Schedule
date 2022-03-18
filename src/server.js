const express = require("express");
const app = express();

app.use(express.json());

const start = async () => {
  await connect();
  app.listen(PORT, () => {
    console.log("Current Server is Running on PORT", PORT);
  });
};

module.exports = start;
