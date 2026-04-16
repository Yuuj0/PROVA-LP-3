const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    const url = req.url;
    let arquivohtml;

    if (url === "/") {
        res.statusCode = 200;
        arquivohtml = fs.readFileSync("./src/pages/index.html");
        res.end(arquivohtml);
    }
    else if (url === "/produtoA") {
        res.statusCode = 200;
        arquivohtml = fs.readFileSync("./src/pages/produtoA.html");
        res.end(arquivohtml);
    }
    else if (url === "/produtoB") {
        res.statusCode = 200;
        arquivohtml = fs.readFileSync("./src/pages/produtoB.html");
        res.end(arquivohtml);
    }
    else {
        res.statusCode = 404;
        res.end("Página não encontrada");
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
