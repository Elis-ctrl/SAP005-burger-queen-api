const { Router } = require("express")
const ControllerProducts = require("../controller/ControllerProducts")

const router = Router()

router.get("/", ControllerProducts.getAllProducts);
router.post("/", ControllerProducts.postProducts);
router.get("/:id", ControllerProducts.getIdProducts);
router.put("/:id", ControllerProducts.updateProducts);
router.delete("/:id", ControllerProducts.deleteProducts);

module.exports = router
