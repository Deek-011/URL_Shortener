const { signup, login } = require("../controllers/auth-controller");
const {
  signupValidation,
  loginValidation,
} = require("../middlewares/authValidation");

const router = require("express").Router();

// Signup route
router.post("/signup", signupValidation, signup);

// Login Route
router.post("/login", loginValidation, login);

module.exports = router;
