const Router = require('express').Router;
const isAuth = require('../middlewares/isAuthMiddleware');
const EmployeeController = require('../controllers/employeeController');
const FileLoader = require('../middlewares/fileLoader');

const employeeRouter = new Router();

employeeRouter.post('/',
    isAuth,
    FileLoader('employees').single('img'),
    EmployeeController.create
);
employeeRouter.get('/', isAuth, EmployeeController.getAll);
employeeRouter.get('/:id', isAuth, EmployeeController.getOne);
employeeRouter.put('/:id',
    isAuth,
    FileLoader('employees').single('img'),
    EmployeeController.updateEmployee
);
employeeRouter.delete('/:id', isAuth, EmployeeController.removeEmployee);
employeeRouter.get('/org/:id', isAuth, EmployeeController.getEmployeesForOrganization);

module.exports = employeeRouter;