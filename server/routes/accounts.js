const router = require('express').Router();
const accountController = require('../controllers/accountController');
const passport = require('passport');

router.post('/', passport.authenticate('jwt', {session: false}), accountController.add);
router.put('/:id', passport.authenticate('jwt', {session: false}), accountController.update);
router.get('/:id', passport.authenticate('jwt', {session: false}), accountController.get);
router.post('/:id/disable', passport.authenticate('jwt', {session: false}), accountController.disable);
router.get('/', passport.authenticate('jwt', {session: false}), accountController.all);


module.exports = router;