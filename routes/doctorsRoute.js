const express = require("express");
const {
  getAllDoctors,
  postDoctor,
  getSingleDoctor,
  isDoctor,
} = require("../controllers/doctorsController");
const verifyJWT = require("../utils/verifyJWT");

const router = express.Router();

router.get("/getalldoctors", getAllDoctors);
router.get("/getsingledoctor", getSingleDoctor);
router.post("/postdoctor", postDoctor);
router.get("/role", verifyJWT, isDoctor);

module.exports = router;
