const express = require("express");
const {
  getAllDoctors,
  postDoctor,
  getSingleDoctor,
  isDoctor,
  updateDoctor,
  deleteDoctor,
} = require("../controllers/doctorsController");
const verifyJWT = require("../utils/verifyJWT");
const verifyAdmin = require("../utils/verifyAdmin");

const router = express.Router();

router.get("/getalldoctors", getAllDoctors);
router.post("/postdoctor", postDoctor);
router.get("/role", verifyJWT, isDoctor);
router.get("/getsingledoctor/:id", getSingleDoctor);
router.put("/updatedoctor/:doctorId", verifyJWT, updateDoctor);
router.delete("/deletedoctor/:doctorId", verifyJWT, verifyAdmin, deleteDoctor);

module.exports = router;
