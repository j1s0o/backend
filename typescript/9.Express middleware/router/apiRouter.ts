import express from 'express'

const apiRouter:express.Router = express.Router()

apiRouter.get('/' , (req:express.Request, res:express.Response) =>{
    res.status(200).send(`<h1>api</h1>`)
})

apiRouter.get('/test' , (req:express.Request, res:express.Response) =>{
    res.status(200).send(`<h1>testapi</h1>`)
})


export default apiRouter
