import http, { ServerResponse, IncomingHttpHeaders, Server, IncomingMessage } from 'http'

export class ApiRouter {
    public static mapRouter(req: IncomingMessage, res: ServerResponse) {
        let url: string | string[] | undefined = req.url
        let method: string | string[] | undefined = req.method
        let data: string = ''
        if (method === 'GET') {
            if (url === '/') {
                data = `${method} + ${url}`
            }
            res.setHeader('Content-Type', 'text/html')
            res.end(`${data}`)
        }
        else if (method === 'POST') {
            if (url === '/login') {
                let body: any = ''
                req.on('data', (chunk) => {
                    body += chunk
                }).on('end', () => {
                    let formData = JSON.parse(body)
                    if (formData.username === 'admin' && formData.password === 'admin') {
                        res.setHeader('Content-Type', 'text/html')
                        res.end(`Hello admin !!!`)
                    }
                    else{
                        res.setHeader('Content-Type', 'text/html')
                        res.end(`Hello ${formData.username}`)
                    }
                })
            }
        }
        else {
            res.statusCode = 404
        }
    }
}