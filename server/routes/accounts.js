const router = require('express').Router();
const accountController = require('../controllers/accountController');

router.post('/', accountController.add);
router.post('/:id/verify', accountController.verify);

module.exports = router;