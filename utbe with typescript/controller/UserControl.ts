import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'
import User from './../models/User'

dotenv.config()
const SECRET_TOKEN: any = process.env.SECRET_TOKEN

const Verify_Token = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req.cookies['Session']
    if (!token) {
        return res.redirect('/login')
    }
    else {
        try {
            const result = jwt.verify(token, SECRET_TOKEN)
            User.findOne({username : result} , function (err : any , user : any) {
                if (!user) {
                    return res.redirect('/login')
                }
                else{
                    return res.json({ result })
                }
            })
            
        }
        catch (err) {
            return res.redirect('/login')
        }
    }

}



const Register = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { username, password } = req.body
    const err = validationResult(req)
    if (!err.isEmpty()) {
        return res.status(400)
    }

    let salt = await bcrypt.genSalt(10)
    let hashpassword = await bcrypt.hash(password, salt)
    User.findOne({ username }, function (err: any, user: any) {
        if (user) {
            return res.json({ process: false })
        }
        else {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                username,
                password: hashpassword
            })
            user.save()
            return res.json({ process: true })
        }
    })

}

const Login = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { username, password } = req.body
    const err = validationResult(req)
    if (!err.isEmpty()) {
        return res.status(400)
    }
    User.findOne({ username }, function (err: any, user: any) {
        if (!user) {
            return res.status(500)
        }
        else {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result === false) {
                    return res.json({ process: false })
                }
                else {
                    const session = jwt.sign(user.username, SECRET_TOKEN)
                    return res.json({ process: true, session: session })
                }
            })
        }
    })


}



const DeleteUser = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { username, password } = req.body
    const err = validationResult(req)
    if (!err.isEmpty()) {
        return res.status(400).json({ errors: err.array() })
    }
    User.findOne({ username }, function (err: any, user: any) {
        if (!user) {
            res.status(500).json({ msg: `Can find user to delete` })
        }
        else {
            bcrypt.compare(password, user.password, function (err: any, result: any) {
                if (result === false) {
                    res.status(500).json({ msg: `Sai password roi thich xoa cua nguoi ta ko ???` })
                }
                else {
                    user.delete()
                    res.status(200).json({ msg: `User deleted` })
                }
            })
        }
    })
}

const AllUser = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    return User.find()
        .then((user) => res.status(200).json({ user }))
        .catch((err) => res.status(500).json({ err }))

}
const Logout = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    return res.clearCookie("Session").end()
}
const test = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req.cookies['Session']
    if (!token) {
        return res.redirect('/login')
    }
    else {
        try {
            const result = jwt.verify(token, SECRET_TOKEN)
            User.findOne({username : result} , function (err : any , user : any) {
                if (!user) {
                    return res.json({ mess : "ahahahahha"})
                }
                else{
                    return res.json({ result })
                }
            })
            
        }
        catch (err) {
            return res.redirect('/login')
        }
    }

}

export default { Register, Login, DeleteUser, AllUser, test, Verify_Token  , Logout}

