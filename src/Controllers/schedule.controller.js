const { Router } = require("express");
const router = Router();

const Scheules = require("../Models/schedule.model");

router.post("", async (req, res) => {
  try {
    const Scheule = await Scheules.create(req.query);
    return res.status(200).send({ data: Scheule });
  } catch (error) {
    return res.status(500).send({ status: "Failed", message: error.message });
  }
});

module.exports = router;
