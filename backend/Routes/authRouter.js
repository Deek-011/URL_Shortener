const { signup, login } = require('../Controllers/authController');
const { signupValidation, loginValidation } = require('../Middlewares/authValidation');

const router = require('express').Router();

// Signup route
router.post('/signup', signupValidation, signup);

// Login Route
router.post('/login', loginValidation, login);

module.exports = router;
