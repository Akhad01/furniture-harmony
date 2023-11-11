const Router = require('express')
const router = Router()
const userRouter = require('../controllers/userContoller')

router.post('/registration', userRouter.registration)
router.post('/login', userRouter.login)
router.get('/auth', userRouter.check)

module.exports = router
