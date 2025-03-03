const http = require('node:http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    if (req.url === '/cars') {
        switch (req.method) {
            case 'GET':
                return res.end(JSON.stringify({data: 'cars'}));
            case 'POST':
                return res.end(JSON.stringify({data: 'create car'}));
        }
    }
});
server.listen(8080);