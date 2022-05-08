const Router = require('express').Router;
const isAuth = require('../middlewares/isAuthMiddleware');
const OrganizationController = require('../controllers/organizationController');
const FileLoader = require('../middlewares/fileLoader');

const organizationRouter = new Router();

// organizationRouter.post('/', OrganizationController.create);
organizationRouter.get('/', isAuth, OrganizationController.getAll);
organizationRouter.get('/my', isAuth, OrganizationController.getMyOrganization);
organizationRouter.put('/my',
    isAuth,
    FileLoader('organizations').single('img'),
    OrganizationController.updateMyOrg
);
organizationRouter.get('/:id', isAuth, OrganizationController.getById);

module.exports = organizationRouter;