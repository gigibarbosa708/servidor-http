import http from 'node:http'
import { URL } from 'node:url'

const porta = 3000

const server = http.createServer()

const requisicao = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200
    const urlObj = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === 'GET' && urlObj.pathname === '/saudacao') {
        const nome = urlObj.searchParams.get('nome');
        return res.end(JSON.stringify({"nome": nome}));
    } else if (req.method === 'GET' && urlObj.pathname === '/') {
        return res.end(JSON.stringify({"data": "Você está na página inicial!"}));
    } else if (req.method === 'GET' && urlObj.pathname === '/contato') {
        return res.end(JSON.stringify({"data": "Entre em contato com nosso suporte através do número 0800 984 652"}));
    } else if (req.method === 'GET' && urlObj.pathname === '/produtos') {
        return res.end(JSON.stringify(
            {"data":
              [{"título": "Bare Vanilla", "preço": 160.99 },{"título": "Velvet Petals", "preço": 350.00 }, {"título": "Love Spell", "preço": 199.19 } ]}));
    }

    return res.end(JSON.stringify({ "chave": "valor" }));


    console.log(`Requisição recebida! ${req.method} ${req.url}`);
    res.end();
}

server.on('request', requisicao);

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`)
});
