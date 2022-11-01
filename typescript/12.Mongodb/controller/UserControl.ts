import express from 'express'
import mongoose from 'mongoose'
import User from './../models/User'
import bcrypt from 'bcryptjs'
import { validationResult  } from 'express-validator'


const Register = async (req:express.Request, res: express.Response , next: express.NextFunction) => {
    const {username , password } = req.body
    const err = validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).json({errors : err.array()})
    }

    let salt = await bcrypt.genSalt(10)
    let hashpassword = await bcrypt.hash(password , salt)
    User.findOne({username} , function (err : any , user : any) {
        if (user){
            return res.status(500).json({msg : `User already exists`})
        }
        else{
                const user = new User({
                _id : new mongoose.Types.ObjectId(),
                username ,
                password : hashpassword  
                })
                return user
                .save()
                .then((user) => res.status(201).json({user}))
                .catch((error) => res.status(500).json({error}))
                }
    }) 

}

const Login = (req:express.Request, res:express.Response, next: express.NextFunction) => {
    const {username , password } = req.body
    const err = validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).json({errors : err.array()})
    }
    User.findOne({username} , function (err : any, user : any){
        if(!user){
            res.status(500).json({msg : `User not exist`})
        }
        else{
            bcrypt.compare(password, user.password, function (err , result){
                if (result === false){
                    res.status(500).json({msg : `Wrong password`})
                }
                else{
                    res.status(200).json({user})
                }
            })
        }
    })
}

const DeleteUser = (req : express.Request, res : express.Response , next : express.NextFunction) => {
    const { username, password} = req.body
    const err = validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).json({errors : err.array()})
    }
    User.findOne({username} , function (err : any, user : any){
        if (!user){
            res.status(500).json({msg : `Can find user to delete`})
        }
        else{
            bcrypt.compare(password , user.password , function (err : any, result : any){
                if (result === false){
                    res.status(500).json({msg : `Sai password roi thich xoa cua nguoi ta ko ???`})
                }
                else{
                    user.delete()
                    res.status(200).json({msg : `User deleted`})
                }
            })
        }
    })
}

const AllUser = (req:express.Request, res:express.Response , next: express.NextFunction) =>{
    const { username, password} = req.body
    const err = validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).json({errors : err.array()})
    }
    User.findOne({username : `admin`} , function (err : any , admin:any) {
        if (!admin){
            res.status(500).json({msg : `Admin was deleted`})
        }
        else if (username !== `admin`){
            res.status(500).json({msg : `Please login to admin`})
        }
        else{
            bcrypt.compare(password , admin.password , function (err: any , result: any){
                if (result === false){
                    res.status(500).json({msg : `Fail to login as admin`})
                }
                else{
                    return User.find()
                    .then((user) => res.status(200).json({user}))
                    .catch((err) => res.status(500).json({err}))
                }
            })
        }
    })
}

export default { Register , Login , DeleteUser , AllUser  }

