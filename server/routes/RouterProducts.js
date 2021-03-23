const { Router } = require('express')
const ControllerProducts = require('../controller/ControllerProducts')

const router = Router()

// aqui vai as requisições

router.get('/', ControllerProducts.getAllProducts);
router.post('/', ControllerProducts.postProducts);
router.get('/:productid', ControllerProducts.getIdProducts);
router.put('/:productid', ControllerProducts.putIdProducts);
router.delete('/:productid', ControllerProducts.deleteProducts);

module.exports = router
