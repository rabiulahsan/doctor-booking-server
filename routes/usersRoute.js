const express = require("express");
const {
  getAllUsers,
  postUser,
  getSingleUser,
  isUser,
} = require("../controllers/usersController");
const verifyJWT = require("../utils/verifyJWT");

const router = express.Router();

router.get("/getallusers", getAllUsers);
router.get("/getsingleuser", getSingleUser);
router.post("/postuser", postUser);
router.get("/role", verifyJWT, isUser);

module.exports = router;
