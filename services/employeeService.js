const ApiError = require('../exceptions/ApiError');
const EmployeeModel = require('../models/employeeModel');

class EmployeeService {
    async createEmployee(name, organizationId) {
        return EmployeeModel.create({
            fullName: name,
            organizationId,
        });
    }

    async getEmployees() {
        return EmployeeModel.find();
    }

    async getEmployeeById(id) {
        const employee = await EmployeeModel.findById(id);
        if (!employee) {
            throw ApiError.notFound('Employee not found');
        }
        return employee;
    }
}

module.exports = new EmployeeService();