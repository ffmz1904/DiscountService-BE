const DiscountService = require('../services/discountService');

class DiscountController {
    async updateDiscount(req, res, next) {
        try {
            const orgId = req.params.orgId;
            const user = req.user;
            const {percent} = req.body;
            const updatedOrg = await DiscountService.updateDiscountPercent(user.organizationId, orgId, percent);
            res.status(200).json(updatedOrg);
        } catch (e) {
            next(e);
        }
    }

    async removeDiscount(req, res, next) {
        try {
            const orgId = req.params.orgId;
            const user = req.user;
            const updatedOrg = await DiscountService.removeDiscount(user.organizationId, orgId);
            res.status(200).json(updatedOrg);
        } catch (e) {
            next(e);
        }
    }

    async updatePersonalDiscount(req, res, next) {
        try {
            const userId = req.params.userId;
            const org = req.user;

            const {percent} = req.body;
            const updatedUser = await DiscountService.updatePersonalDiscountPercent(org.organizationId, userId, percent);
            res.status(200).json(updatedUser);
        } catch (e) {
            next(e);
        }
    }

    async deletePersonalDiscount(req, res, next) {
        try {
            const userId = req.params.userId;
            const org = req.user;

            const updatedUser = await DiscountService.removePersonalDiscount(org.organizationId, userId);
            res.status(200).json(updatedUser);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new DiscountController();