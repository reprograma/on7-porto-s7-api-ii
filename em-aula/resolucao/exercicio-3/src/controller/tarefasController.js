const tarefas = require('../model/tarefas.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.status(200).send(tarefas);
}

module.exports = { getAll }