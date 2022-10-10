const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/verify/:id', authController.verify);
router.get('/verify/:id/get', authController.getVerified);
router.post('/reset-password', authController.sendEmail);
router.put('/reset-password/:id', authController.resetPassword);

module.exports = router;