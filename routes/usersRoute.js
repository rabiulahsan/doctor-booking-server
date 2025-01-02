const express = require("express");
const {
  getAllUsers,
  postUser,
  getSingleUser,
  isUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");
const verifyJWT = require("../utils/verifyJWT");
const verifyAdmin = require("../utils/verifyAdmin");
const verifyUser = require("../utils/verifyUser");

const router = express.Router();

router.get("/getallusers", getAllUsers);
router.post("/postuser", postUser);
router.get("/role", verifyJWT, isUser);
router.get("/getsingleuser/:id", getSingleUser);
router.put("updateuser/:userId", verifyJWT, verifyUser, updateUser);
router.delete("deleteuser/:userId", verifyJWT, verifyAdmin, deleteUser);

module.exports = router;
