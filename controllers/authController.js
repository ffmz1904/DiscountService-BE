const AdminService = require('../services/adminService');
const OrganizationService = require('../services/organizationService');

class AuthController {
    async registration(req, res, next) {
        try {
            const {
                organization,
                user,
            } = req.body;
            const organizationData = await OrganizationService.createOrganization(organization)
            await AdminService.createAdmin(user, organizationData._id);
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