const { Router } = require("express");
const router = Router();
const schedule1 = require("node-schedule");

const Scheules = require("../Models/schedule.model");

router.post("", async (req, res) => {
  try {
    const Scheule = await Scheules.create(req.query);
    let str = req.query.dateTime;
    const date = new Date(str);
    let min = date.getMinutes();
    let hrs = date.getHours();
    let dte = date.getDate();
    let mth = date.getMonth();
    let day = date.getDay();

    schedule1.scheduleJob(`job`, `${(0, min, hrs, dte, mth, day)}`, () => {
      let test = req.query.text;
      setTimeout(() => {
        test = test.split("").reverse().join("");
        console.log(test);
      }, 1000 * test);
      schedule1.cancelJob(`job`);
    });
    return res.status(200).send({ data: Scheule });
  } catch (error) {
    return res.status(500).send({ status: "Failed", message: error.message });
  }
});

module.exports = router;
