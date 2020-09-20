// arquivo usado para criar servidor em node.js com express. o nome é comum na comunidade
const express = require('express');

// invocando a função express para criar uma instância de aplicativo, que é armazenada nessa constante
const app = express();

// ouvir requisições. ele automaticamente incialiaza um servidor e seta o domínimo como localhost
app.listen(3000);

app.use((req, res, next) => {
    console.log('nova requisição realizada'),
        console.log('host ', req.hostname),
        console.log('path ', req.path),
        console.log('method ', req.method)

    next()
})

// responder requisições
app.get('/', (req, res) => {
    // antes usavamos: res.write('') ou res.end(). um terceiro método já seta o Header e infere o status code:
    // res.send('<h1>Oi</h1>');
    // o root: __dirname serve para descrever o nome do arquivo e o diretório onde o arquivo se encontra
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/tarefas', (req, res) => {
    // res.send('<h1>Oi</h1>');
    res.sendFile('./views/tarefas.html', { root: __dirname });
})

app.get('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})