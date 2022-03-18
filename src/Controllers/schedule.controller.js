const { Router } = require("express");
const res = require("express/lib/response");
const router = Router();

const Scheules = require("../Models/schedule.model");

router.post("", (req, res) => {
  try {
    return res.status(200).send("Post request runs succesfully");
  } catch (error) {
    return res.status(500).send({ status: "Failed", message: error.message });
  }
});
