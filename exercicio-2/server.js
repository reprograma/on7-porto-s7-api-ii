const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Requisição realizada');

    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello, World! <3</h1>');
    res.end();
});

server.listen(8080, 'localhost', () => {
    console.log('Servidor rodando na porta 8080');
});