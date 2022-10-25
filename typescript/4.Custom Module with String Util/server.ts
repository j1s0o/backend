import http , {Server , IncomingMessage , ServerResponse} from 'http'
import { StringUtil } from './util/StringUtil';

const server:Server = http.createServer((req:IncomingMessage , res:ServerResponse ) => {
    res.setHeader('Content-Type', 'text/html')
    let str:string = "jisoo kim"
    let lenstr:number = StringUtil.len(str)
    res.end(`<h1>${lenstr}</h1>`)
});






const hostname:string = `127.0.0.1`
const port:number = 3000
server.listen(port , hostname , () => {
    console.log(`listening on ${hostname}:${port}`)
})