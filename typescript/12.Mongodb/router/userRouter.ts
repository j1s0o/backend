import express from 'express'
import bcrypt from 'bcryptjs'
import {validationResult , body } from 'express-validator'

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
] ,async (req:express.Request, res:express.Response)=>{
    let {username , password} = req.body
    const err = validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).json({errors : err.array()})
    }
    try {
        let salt = await bcrypt.genSalt(10)
        let hashpassword = await bcrypt.hash(password , salt)
        res.status(200).json({
            username : username,
            password : hashpassword
        })
    }
    catch (err){
        res.statusCode = 404
    }
    
})

export default userRouter
