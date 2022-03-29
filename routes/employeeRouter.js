const Router = require('express').Router;
const EmployeeController = require('../controllers/employeeController');

const employeeRouter = new Router();

employeeRouter.post('/', EmployeeController.create);
employeeRouter.get('/', EmployeeController.getAll);
employeeRouter.get('/:id', EmployeeController.getOne);

module.exports = employeeRouter;