const express = require("express");
const {
  getAllDoctors,
  postDoctor,
} = require("../controllers/doctorsController");

const router = express.Router();

router.get("/getalldoctors", getAllDoctors);
router.post("/postdoctor", postDoctor);

module.exports = router;
