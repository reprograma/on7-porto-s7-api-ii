// passo-a-passo
// 1. importar fs (que vai nos ajudar a ler os arquivos e enviar como resposta)
// 2. definir uma const para acessar nossos arquivos
// 3. usar switch, case e break para definir cada caso
// 4. enviar status code

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