import express from 'express'
import {body } from 'express-validator'
import UserControl from '../controller/UserControl'

const userRouter:express.Router = express.Router()

userRouter.get('/' , (req:express.Request, res:express.Response) =>{
    res.status(200).send(`<h1>user</h1>`)
})

userRouter.get('/test' , (req:express.Request, res:express.Response) =>{
    res.status(200).send(`<h1>test user</h1>`)
})

userRouter.post('/register' , [
    body('username').not().isEmpty().withMessage('Where is your username ???'),
    body('password').not().isEmpty().withMessage(`Fuck why u don\'t have a password`)
] ,UserControl.Register)

userRouter.post('/login' , [
    body('username').not().isEmpty().withMessage('Where is your username ???'),
    body('password').not().isEmpty().withMessage(`Fuck why u don\'t have a password`)
],UserControl.Login) 

userRouter.post('/delete' ,  [
    body('username').not().isEmpty().withMessage('Where is your username ???'),
    body('password').not().isEmpty().withMessage(`Fuck why u don\'t have a password`)
] , UserControl.DeleteUser)

userRouter.post('/all',  [
    body('username').not().isEmpty().withMessage('Where is your username ???'),
    body('password').not().isEmpty().withMessage(`Fuck why u don\'t have a password`)
] , UserControl.AllUser)


export default userRouter
