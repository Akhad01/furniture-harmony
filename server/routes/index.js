const Router = require('express')
const router = Router()
const furnitureRouter = require('./furnitureRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/furniture', furnitureRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)

module.exports = router
