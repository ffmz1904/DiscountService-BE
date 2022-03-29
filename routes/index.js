const Router = require('express').Router;

const router = new Router();

router.get('/', (req, res) => res.status(200).json({
    'Test': 'ok',
}));

module.exports = router;