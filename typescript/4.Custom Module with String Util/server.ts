import http , {Server , IncomingMessage , ServerResponse} from 'http'
import { StringUtil }  from './util/StringUtil';
import { MathUtils } from './util/MathUtil';

const server:Server = http.createServer((req:IncomingMessage , res:ServerResponse ) => {
    res.setHeader('Content-Type', 'text/html')
    let num:number = 2
    let result:string = MathUtils.Multiple(num)
    res.end(`${result}`)
});






const hostname:string = `127.0.0.1`
const port:number = 3000
server.listen(port , hostname , () => {
    console.log(`listening on ${hostname}:${port}`)
})