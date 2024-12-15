const express = require("express");
const {
  getAllDoctors,
  postDoctor,
  getSingleDoctor,
} = require("../controllers/doctorsController");

const router = express.Router();

router.get("/getalldoctors", getAllDoctors);
router.get("/getsingledoctor/", getSingleDoctor);
router.post("/postdoctor", postDoctor);

module.exports = router;
