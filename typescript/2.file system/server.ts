import http , {Server , IncomingMessage , ServerResponse} from 'http'
import fs from 'fs'
import path from 'path';

const server:Server = http.createServer((req:IncomingMessage , res:ServerResponse ) => {
    fs.readFile(path.join(__dirname , 'data' , 'readme.txt') , 'utf8' , (err, data) =>
    {
        if (err)
            res.statusCode = 500
        else
            // res.statusCode = 200
            // res.setHeader('Content-Type', 'text/html')
            // res.end(`<pre>${data}</pre>`)
            fs.writeFile(path.join(__dirname , 'data' , 'readme.txt'), data ,  'utf8', (err) =>{
            if (err)
                res.statusCode = 500
            else
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(`<pre>hacked by j1s0o</pre>`)
            })
      
    }) 
});






const hostname:string = `127.0.0.1`
const port:number = 3000
server.listen(port , hostname , () => {
    console.log(`listening on ${hostname}:${port}`)
})