import http , {Server , IncomingMessage , ServerResponse} from 'http'
import fs from 'fs'
import path from 'path';

const server:Server = http.createServer((req:IncomingMessage , res:ServerResponse ) => {
    fs.readFile(path.join(__dirname, 'data' , 'data.json'), 'utf8' , (err, data) => {
        if (err) 
            res.statusCode = 404
        else
            res.setHeader('Content-Type', 'application/json')
            res.end(data)
        })
});






const hostname:string = `127.0.0.1`
const port:number = 3000
server.listen(port , hostname , () => {
    console.log(`listening on ${hostname}:${port}`)
})