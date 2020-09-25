// passo-a-passo
// 1. importar fs (que vai nos ajudar a ler os arquivos e enviar como resposta)
// 2. definir uma const para acessar nossos arquivos
// 3. usar switch, case e break para definir cada caso
// 4. enviar status code

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('Requisição realizada');

    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/biscoito':
            path += 'index.html';
            res.statusCode = 500;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data)
        }
    })
});

server.listen(8080, 'localhost', () => {
    console.log('Servidor rodando na porta 8080');
});