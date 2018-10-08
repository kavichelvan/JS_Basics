const http = require('http');

const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
fs.readFile('page.html', (err, html)=> {
    if(err) {
        throw err;
    }
    const server = http.createServer((req,res) => {
        res.staltusCode = 200;
        res.setHeader('content-type', 'text/html');
        res.write(html);
        //res.end('hello world');
        res.end();
    });
    
    server.listen(port, hostname, () =>{
        console.log('server started at port '+port);
    });
});


