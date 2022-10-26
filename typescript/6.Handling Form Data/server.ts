import http , {Server , IncomingMessage , ServerResponse, request} from 'http'
import { StringUtil }  from './util/StringUtil';
import { MathUtils } from './util/MathUtil';
import { ApiRouter } from './router/ApiRouter';


const server:Server = http.createServer((req:IncomingMessage , res:ServerResponse ) => { 
    ApiRouter.mapRouter(req , res)
});






const hostname:string = `127.0.0.1`
const port:number = 3000
server.listen(port , hostname , () => {
    console.log(`listening on ${hostname}:${port}`)
})