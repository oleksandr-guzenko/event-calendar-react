const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);

module.exports = router;