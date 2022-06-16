const http = require('http');
const app = require('./app');
const port = 3000

app.set('port',process.env.PORT || port);
const server = http.createServer(app);
console.log('connecté au port '+port);

server.listen(process.env.PORT || port);