const AdminService = require('../services/adminService');

class AuthController {
    async registration(req, res, next) {
        try {
            const {email, password} = req.body;
            await AdminService.createAdmin(email, password);
            res.status(200).json({ success: true });
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const admin = await AdminService.getAdminByEmailAndPassword(email, password);
            res.status(200).json(admin);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new AuthController();