import express from 'express'
import path from 'path'
import ApiConttrol from '../controller/ApiConttrol' 
const apiRouter:express.Router = express.Router()



apiRouter.get('/' , (req:express.Request, res:express.Response) =>{
    res.status(200).render(path.join('html/partials' , 'main'))
})

apiRouter.get('/login' , (req:express.Request, res:express.Response) =>{
    res.status(200).render(path.join('html/api' , 'login'))
})

apiRouter.get('/register' , (req:express.Request, res:express.Response) =>{
    res.status(200).render(path.join('html/api' , 'register'))
})

apiRouter.get('/users' , (req:express.Request, res:express.Response) =>{
    res.status(200).render(path.join('html/api' , 'users'))
})
apiRouter.get('/test' , (req:express.Request, res:express.Response) =>{
    res.status(200).render(path.join('html/api' , 'test'))
})
apiRouter.post('/search' , ApiConttrol.Search)
export default apiRouter
