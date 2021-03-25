const { Router } = require('express')
const ControllerUsers = require('../controller/ControllerUsers')

const router = Router()

// aqui vai as requisições

router.get("/", ControllerUsers.getAllUsers)
router.post('/', ControllerUsers.postUsers);
router.get("/:id", ControllerUsers.getIdUsers)
// router.put("/:id", ControllerUsers.updateUsers);
// router.delete("/:id", ControllerUsers.deleteUsers);

module.exports = router