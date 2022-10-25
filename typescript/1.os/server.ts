import http , {Server , IncomingMessage , ServerResponse} from 'http'
import os from 'os'



const server:Server = http.createServer((req:IncomingMessage , res:ServerResponse ) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    let osData = {
        totalmemory: os.totalmem(),
        freememory: os.freemem(),
        uptime: os.uptime(),
        homedir: os.homedir(),
        coputername: os.hostname(),
    }
    res.end(`<pre>${JSON.stringify(osData)}</pre>`)
});






const hostname:string = `127.0.0.1`
const port:number = 3000
server.listen(port , hostname , () => {
    console.log(`listening on ${hostname}:${port}`)
})