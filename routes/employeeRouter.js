const Router = require('express').Router;
const isAuth = require('../middlewares/isAuthMiddleware');
const EmployeeController = require('../controllers/employeeController');

const employeeRouter = new Router();

employeeRouter.post('/', isAuth, EmployeeController.create);
employeeRouter.get('/', isAuth, EmployeeController.getAll);
employeeRouter.get('/:id', isAuth, EmployeeController.getOne);
employeeRouter.get('/org/:id', isAuth, EmployeeController.getEmployeesForOrganization);

module.exports = employeeRouter;