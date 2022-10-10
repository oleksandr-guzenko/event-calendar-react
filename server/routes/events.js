const router = require('express').Router();
const eventController = require('../controllers/eventController');
const passport = require('passport');

router.post('/', passport.authenticate('jwt', {session: false}), eventController.add);
router.get('/', passport.authenticate('jwt', {session: false}), eventController.all);
router.get('/:id', passport.authenticate('jwt', {session: false}), eventController.get);
router.put('/:id', passport.authenticate('jwt', {session: false}), eventController.update);


module.exports = router;