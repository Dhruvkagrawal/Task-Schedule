const express = require("express");
const app = express();
const connect = require("./Config/db");

const scheduleController = require("./Controllers/schedule.controller");

app.use(express.json());
app.use("/schedule", scheduleController);

const start = async (PORT) => {
  await connect();
  app.listen(PORT, () => {
    console.log("Current Server is Running on PORT", PORT);
  });
};

module.exports = start;
