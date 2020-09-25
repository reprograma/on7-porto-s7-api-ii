const express = require('express');
const app = express();

app.listen(8080);

app.use((req, res, next) => {
    console.log('nova requisição realizada'),
        console.log('host ', req.hostname),
        console.log('path ', req.path),
        console.log('method ', req.method)

    next();
});

app.get('/', (req, res) => {
    res.status(200).sendFile('./views/index.html', { root: __dirname })
});