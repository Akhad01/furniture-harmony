const Router = require('express')
const router = Router()
const userRouter = require('../controllers/userContoller')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userRouter.registration)
router.post('/login', userRouter.login)
router.get('/auth', authMiddleware, userRouter.check)

module.exports = router
