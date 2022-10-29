import express from 'express'

const userRouter:express.Router = express.Router()

userRouter.get('/' , (req:express.Request, res:express.Response) =>{
    res.status(200).send(`<h1>user</h1>`)
})

userRouter.get('/test' , (req:express.Request, res:express.Response) =>{
    res.status(200).send(`<h1>test user</h1>`)
})


export default userRouter
