const express = require("express");
const {
  getAllUsers,
  postUser,
  getSingleUser,
} = require("../controllers/usersController");

const router = express.Router();

router.get("/getallusers", getAllUsers);
router.get("/getsingleuser", getSingleUser);
router.post("/postuser", postUser);

module.exports = router;
