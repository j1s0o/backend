import express from 'express'
import path from 'path'

const apiRouter:express.Router = express.Router()



apiRouter.get('/' , (req:express.Request, res:express.Response) =>{
    res.status(200).render(path.join('html/main' , 'main'))
})

apiRouter.get('/login' , (req:express.Request, res:express.Response) =>{
    res.status(200).render(path.join('html/user' , 'login'))
})


export default apiRouter
