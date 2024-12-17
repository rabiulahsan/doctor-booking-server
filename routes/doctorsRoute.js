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
router.post("/postdoctor", postDoctor);
router.get("/role", verifyJWT, isDoctor);
router.get("/getsingledoctor/:id", getSingleDoctor);

module.exports = router;
