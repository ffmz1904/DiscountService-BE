const ApiError = require('../exceptions/ApiError');
const OrganizationModel = require('../models/organizationModel');
const EmployeeModel = require('../models/employeeModel');

class DiscountService {
    async updateDiscountPercent(userOrgId, orgId, percent) {
        const organization = await OrganizationModel.findById(userOrgId);
        if (!organization) {
            throw ApiError.notFound('Your organization not found');
        }

        let alreadyCreated = false;
        const discounts = organization.discounts.map(el => {
            if (el.id === orgId) {
                alreadyCreated = true;
                return { id: orgId, percent };
            }
            return el;
        });

        if (!alreadyCreated) {
            discounts.push({ id:orgId, percent });
        }

        const updatedOrg = await OrganizationModel.findByIdAndUpdate(userOrgId, {
            discounts,
        }, {new: true});
        return updatedOrg;
    }

    async removeDiscount(userOrgId, orgId) {
        const organization = await OrganizationModel.findById(userOrgId);
        if (!organization) {
            throw ApiError.notFound('Your organization not found');
        }

        const discounts = organization.discounts.filter(el => el.id !== orgId);
        const updatedOrg = await OrganizationModel.findByIdAndUpdate(userOrgId, {discounts}, {new: true});
        return updatedOrg;
    }

    async updatePersonalDiscountPercent(orgId, userId, percent) {
        const user = await EmployeeModel.findById(userId);
        if (!user) {
            throw ApiError.notFound('User not found');
        }

        const personalDiscounts = user.personalDiscounts.filter(el => el.id !== orgId);
        personalDiscounts.push({
            id: orgId,
            percent,
        });

        const updatedUser = await EmployeeModel.findByIdAndUpdate(userId, {personalDiscounts}, {new: true});
        return updatedUser;
    }

    async removePersonalDiscount(orgId, userId) {
        const user = await EmployeeModel.findById(userId);
        if (!user) {
            throw ApiError.notFound('User not found');
        }
        const personalDiscounts = user.personalDiscounts.filter(el => el.id !== orgId);
        const updatedUser = await EmployeeModel.findByIdAndUpdate(userId, {personalDiscounts}, {new: true});
        return updatedUser;
    }
}

module.exports = new DiscountService();