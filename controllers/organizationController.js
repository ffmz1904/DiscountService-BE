const OrganizationService = require('../services/organizationService');

class OrganizationController {
    async create(req, res, next) {
        try {
            const {name, description} = req.body;
            const organization = await OrganizationService.createOrganization(name, description);
            res.status(200).json(organization);
        } catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try {
            const organizations = await OrganizationService.getOrganizations();
            res.status(200).json(organizations);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new OrganizationController();