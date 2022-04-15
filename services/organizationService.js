const ApiError = require('../exceptions/ApiError');
const OrganizationModel = require('../models/organizationModel');

class OrganizationService {
    async createOrganization(organizationData) {
        const organization = await OrganizationModel.create({
            name: organizationData.name,
            description: organizationData.description,
        });
        return organization;
    }

    async getOrganizations(userOrgId) {
        return OrganizationModel.find({'_id': {$ne: userOrgId}});
    }

    async getOrganizationById(id) {
        const organization = await OrganizationModel.findById(id);
        if (!organization) {
            throw ApiError.notFound('Organization not found');
        }
        return organization;
    }
}

module.exports = new OrganizationService();