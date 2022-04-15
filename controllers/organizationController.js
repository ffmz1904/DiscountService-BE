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

    async getById(req, res, next) {
        try {
            const id = req.params.id;
            const organization = await OrganizationService.getOrganizationById(id);
            res.status(200).json(organization);
        } catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try {
            const userOrgId = req.user.organizationId;
            const organizationsData = await OrganizationService.getOrganizations(userOrgId);
            const myOrg = await OrganizationService.getOrganizationById(userOrgId);

            const organizations = [];
            for(let organization of organizationsData) {
                const discount = myOrg.discounts.filter(el => el.id === organization._id.toString())[0];
                if (discount) {
                    organizations.push({ ...organization.toObject(), discountForOrg: discount.percent });
                } else {
                    organizations.push({ ...organization.toObject(), discountForOrg: null });
                }
            }
            res.status(200).json(organizations);
        } catch (e) {
            next(e);
        }
    }

    async getMyOrganization(req, res, next) {
        try {
            const user = req.user;
            const organizations = await OrganizationService.getOrganizationById(user.organizationId);
            res.status(200).json(organizations);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new OrganizationController();