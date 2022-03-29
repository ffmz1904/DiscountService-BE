const Router = require('express').Router;
const OrganizationController = require('../controllers/organizationController');

const organizationRouter = new Router();

organizationRouter.post('/', OrganizationController.create);
organizationRouter.get('/', OrganizationController.getAll);

module.exports = organizationRouter;