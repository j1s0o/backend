import express from 'express'
import {body } from 'express-validator'
import UserControl from '../controller/UserControl'


const userRouter:express.Router = express.Router()

userRouter.get('/')
userRouter.get('/verify' , UserControl.Verify_Token) 
userRouter.get('/test' ,UserControl.test)

userRouter.post('/register' ,UserControl.Register)

userRouter.post('/login',UserControl.Login) 

userRouter.post('/delete' ,  [
    body('username').not().isEmpty().withMessage('Where is your username ???'),
    body('password').not().isEmpty().withMessage(`Fuck why u don\'t have a password`)
] , UserControl.DeleteUser)

userRouter.get('/all',  [
    body('username').not().isEmpty().withMessage('Where is your username ???'),
    body('password').not().isEmpty().withMessage(`Fuck why u don\'t have a password`)
] , UserControl.AllUser )
userRouter.get('/logout' , UserControl.Logout)

export default userRouter
