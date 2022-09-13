
const { PORT=3000 } = process.env;
const { NODE_ENV='production' } = process.env;
const http = require('http');
const server = http.createServer((req, res)=>{
    // console.log('get zapros');
    console.log(req.url);
    console.log(req.method);
    // console.log(req.headers);
    // console.log(req.get);
    // res.statusCode = 200;
    // res.statusMessage = 'OK';
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('Hello, ');
    // res.write('world!');
    // res.end();

    if (NODE_ENV !== 'production') {
        console.log("not production");
    }

    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf8'
    });
    res.end('<h1>Helloword!</h1>', 'utf8');
});
server.listen(PORT);
