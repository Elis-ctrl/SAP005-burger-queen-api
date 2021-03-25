const { Router } = require('express');
const ExampleRouter = require("./ExampleRouter");
const RouterUsers = require("./RouterUsers");
const RouterProducts = require("./RouterProducts");
const RouterOrders = require("./RouterUsers");

const router = Router()

// aqui vai todas as rotas
// router.use('/example', ExampleRouter);
router.use('/users', RouterUsers);
// router.use('/products', RouterProducts);
// router.use('/orders', RouterOrders);

module.exports = router
