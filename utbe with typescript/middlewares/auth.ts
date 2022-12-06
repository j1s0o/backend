import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import express from 'express'
dotenv.config()
const SECRET_TOKEN : any = process.env.SECRET_TOKEN
const Verify_Token = (res: express.Response, req: express.Request, next: express.NextFunction) => {
    const token = req.cookies['Session']
    if(!token){
        res.sendStatus(401).render('/login')
    }
    else{
        try {
            const decode = jwt.verify(token, SECRET_TOKEN)
        }
        catch (err) {
            res.sendStatus(401).render('/login')
        }
    }
    next()
}

export default {Verify_Token}