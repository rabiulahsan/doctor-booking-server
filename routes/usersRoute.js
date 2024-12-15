const express = require("express");
const { getAllUsers } = require("../controllers/usersController");

const router = express.Router();

router.get("/getallusers", getAllUsers);

module.exports = router;
