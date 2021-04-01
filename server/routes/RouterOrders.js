const { Router } = require("express")
const ControllerOrders = require("../controller/ControllerOrders")

const router = Router()

router.get("/", ControllerOrders.getAllOrders);
// router.post("/", ControllerOrders.postOrders);
// router.get("/:id", ControllerOrders.getIdOrders)
// router.put("/:id", ControllerOrders.upOrders);
// router.delete("/:id", ControllerOrders.deleteOrders);

module.exports = router