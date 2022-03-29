const Router = require('express').Router;
const AuthController = require('../controllers/authController');

const authRouter = new Router();

authRouter.post('/registration', AuthController.registration);
authRouter.post('/login', AuthController.login);

module.exports = authRouter;