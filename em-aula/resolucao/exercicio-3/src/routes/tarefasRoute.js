const express = require("express");
const router = express.Router();
const controller = require("../controller/tarefasController");

router.get("/", controller.getAll)
router.get("/tarefas", controller.getAll)

module.exports = router;