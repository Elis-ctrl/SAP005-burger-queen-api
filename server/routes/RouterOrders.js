const { Router } = require('express')
const ControllerOrders = require('../controller/ControllerOrders')

const router = Router()

// aqui vai as requisições

router.get("/", ControllerOrders.getAllOrders)
router.post("/", ControllerOrders.postOrders);
router.get("/:orderid", ControllerOrders.getIdOrders)
router.put("/:orderid", ControllerOrders.putIdOrders);
router.delete("/:orderid", ControllerOrders.deleteOrders);

module.exports = router