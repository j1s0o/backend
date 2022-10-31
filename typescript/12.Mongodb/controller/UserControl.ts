import express from 'express'
import mongoose from 'mongoose'
import User from './../models/User'
import bcrypt from 'bcryptjs'
import {validationResult  } from 'express-validator'

const Register = async (req:express.Request, res: express.Response , next: express.NextFunction) => {
    const {username , password } = req.body
    const err = validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).json({errors : err.array()})
    }

    let salt = await bcrypt.genSalt(10)
    let hashpassword = await bcrypt.hash(password , salt)
    const user = new User({
        _id : new mongoose.Types.ObjectId(),
        username ,
       password : hashpassword  
    })
    return user
        .save()
        .then((user) => res.status(201).json({user}))
        .catch((error) => res.status(500).json({error}))
    next()
}

const Login = (req:express.Request, res:express.Response, next: express.NextFunction) => {
    const {username , password } = req.body
    
    return User.findOne({username})
        .then((user) =>( user ?  res.status(200).json({user}) : res.status(404).json({"message" : "User not found"})))
        .catch((error) => res.status(500).json({error}))
    next()
}

export default { Register , Login }