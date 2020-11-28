const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const { getCategoryById } = require("../controllers/category");
const { isAuthenticated, isAdmin, isSignedIn } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

// params
router.param("userId", getUserById);
router.param("category", getCategoryById);

// routes
router.post("/category/create/:userId", createCategory);

module.exports = router;
