const express = require("express");
const verifyJWT = require("../utils/verifyJWT");
const { isAdmin, getAllAdmins } = require("../controllers/adminController");

const router = express.Router();

router.get("/getall", getAllAdmins);
router.get("/role", verifyJWT, isAdmin);

module.exports = router;
