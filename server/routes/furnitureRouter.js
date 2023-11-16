const Router = require('express')
const router = Router()
const furnitureContoller = require('../controllers/furnitureController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), furnitureContoller.create)
router.get('/', furnitureContoller.getAll)
router.get('/:id', furnitureContoller.getOne)

module.exports = router
