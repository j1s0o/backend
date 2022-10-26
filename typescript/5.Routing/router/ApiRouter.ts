import http , {ServerResponse , IncomingHttpHeaders , Server, IncomingMessage} from 'http'

export class ApiRouter{
    public static mapRouter( req:IncomingMessage , res:ServerResponse){
        let url:string| string[] | undefined = req.url
        let method:string | string[] | undefined= req.method
        let data:string = ''
        if(url === '/' && method === 'GET'){
            data = `${method} + ${url}`
        }
        else if(url === '/test' && method === 'GET'){
            data = `${method} + ${url}`
        }
        else{
            res.statusCode = 404
        }
        res.setHeader('Content-Type', 'text/html')
        res.end(`${data}`)
    }
}