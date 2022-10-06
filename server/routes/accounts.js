const router = require('express').Router();
const accountController = require('../controllers/accountController');

router.post('/', accountController.add);


module.exports = router;