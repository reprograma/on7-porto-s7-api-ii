const express = require('express');
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).send({
        title: "Reprograma - on7 Backend - TodoList",
        version: "1.0.0",
        label: "APIMON",
        turma: "a melhor de todas me prometoram bolo de rolo"
    })
});

module.exports = router;