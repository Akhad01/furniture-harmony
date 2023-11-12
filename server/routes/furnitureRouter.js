const Router = require('express')
const router = Router()
const furnitureContoller = require('../controllers/furnitureController')

router.post('/', furnitureContoller.create)
router.get('/', furnitureContoller.getAll)
router.get('/:id', furnitureContoller.getOne)

module.exports = router
