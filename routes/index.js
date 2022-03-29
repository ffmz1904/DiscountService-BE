const Router = require('express').Router;
const authRouter = require('./authRouter');
const organizationRouter = require('./organizationRouter');

const router = new Router();

router.use('/auth', authRouter);
router.use('/org', organizationRouter);

module.exports = router;