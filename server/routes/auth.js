const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/verify/:id', authController.verify);
router.get('/verify/:id/get', authController.getVerified);

module.exports = router;