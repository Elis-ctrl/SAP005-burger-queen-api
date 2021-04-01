const { Router } = require("express");
const RouterUsers = require("./RouterUsers");
const RouterProducts = require("./RouterProducts");
const RouterOrders = require("./RouterOrders");

const router = Router()

router.use("/users", RouterUsers);
router.use("/products", RouterProducts);
router.use("/orders", RouterOrders);

module.exports = router
