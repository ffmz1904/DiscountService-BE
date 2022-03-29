const ApiError = require('../exceptions/ApiError');
const OrganizationModel = require('../models/organizationModel');

class OrganizationService {
    async createOrganization(name, description) {
        const organization = await OrganizationModel.create({
           name,
           description,
        });
        return organization;
    }

    async getOrganizations() {
        return OrganizationModel.find();
    }
}

module.exports = new OrganizationService();