const express = require("express");
const { getAllDoctors } = require("../controllers/doctorsController");

const router = express.Router();

router.get("/getalldoctors", getAllDoctors);

module.exports = router;
