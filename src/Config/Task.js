const schedule = require("node-schedule");

let date = new Date(str);
let min = date.getMinutes();
let hrs = date.getHours();
let dte = date.getDate();
let mth = date.getMonth();
let day = date.getDay();

schedule.scheduleJob(`job`, `${(min, hrs, dte, mth, day)}`, () => {
  console.log("Job Ran @", new Date().toString());
  schedule11.cancelJob("job");
});

module.exports = date;
