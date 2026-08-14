import http from 'node:http'

const PORT = 3000

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Requesição recebida! ${req.method} ${req.url}');

    res.statusCode = 201
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Recurso criado');
});

server.listen(PORT, ()=> {
    console.log(`Servirdor rodando na porta${PORT}`)
})