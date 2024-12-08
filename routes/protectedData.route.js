const express = require("express");
const isAuth = require("../middlewares/authentication.mdw");
const { getProtectedData } = require("../controllers/protectedData.controller");
const router = express.Router();

// Protected route
router.get("/protected-data", isAuth, getProtectedData);

module.exports = router;
