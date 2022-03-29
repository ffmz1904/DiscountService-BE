const EmployeeService = require('../services/employeeService');

class EmployeeController {
    async create(req, res, next) {
        try {
            const {name, organizationId} = req.body;
            const employee = await EmployeeService.createEmployee(name, organizationId);
            res.status(200).json(employee);
        } catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try {
            const employees = await EmployeeService.getEmployees();
            res.status(200).json(employees);
        } catch (e) {
            next(e);
        }
    }

    async getOne(req, res, next) {
        try {
            const id = req.params.id;
            const employee = await EmployeeService.getEmployeeById(id);
            res.status(200).json(employee);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new EmployeeController();