const express = require('express');
const router = express.Router();
const validateUserData = require('../middlewares/validate.mdw');
const { registerUser, loginUser, logoutUser } = require('../controllers/user.controller');
const isAuth = require('../middlewares/authentication.mdw');

router.post('/signup', validateUserData, registerUser);
router.post('/login', loginUser);
router.post('/logout',isAuth, logoutUser);

module.exports = router;
