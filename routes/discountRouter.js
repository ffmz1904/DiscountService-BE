const Router = require('express').Router;
const isAuth = require('../middlewares/isAuthMiddleware');
const DiscountController = require('../controllers/discountController');

const discountRouter = new Router();

discountRouter.put('/:orgId', isAuth, DiscountController.updateDiscount);
discountRouter.delete('/:orgId', isAuth, DiscountController.removeDiscount);

discountRouter.put('/personal/:userId', isAuth, DiscountController.updatePersonalDiscount);
discountRouter.delete('/personal/:userId', isAuth, DiscountController.deletePersonalDiscount);

module.exports = discountRouter;