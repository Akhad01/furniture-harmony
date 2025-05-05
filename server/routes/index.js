const Router = require('express');
const router = Router();
const furnitureRouter = require('./furnitureRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');
// const basket = require('./basketRouter');

router.use('/user', userRouter);
router.use('/furniture', furnitureRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
// router.use('/basket', basket);

module.exports = router;
