const bcrypt = require('bcrypt');
const {ADMIN_STATUS} = require('../utils/constants');
const ApiError = require('../exceptions/ApiError');
const AdminModel = require('../models/adminModel');

class AdminService {
    async createAdmin(email, password) {
        const hashPass = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT));
        await AdminModel.create({
            password: hashPass,
            status: ADMIN_STATUS.ADMIN,
            email,
        })
    }

    async getAdminByEmailAndPassword(email, password) {
        const adminWithPassword = await AdminModel.findOne({ email }, { password: 1 });
        if (!adminWithPassword) {
            throw ApiError.notFound('Incorrect email');
        }

        const comparePass = await bcrypt.compare(password, adminWithPassword.password);
        if (!comparePass) {
            throw ApiError.badRequest('Incorrect password');
        }

        return AdminModel.findOne({ email });
    }
}

module.exports = new AdminService();