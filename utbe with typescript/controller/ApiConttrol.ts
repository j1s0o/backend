import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'
import Video from './../models/Video'
import User from './../models/User'


const Search = (req: express.Request, res: express.Response, next: express.NextFunction)=>{
    const search =  req.body.search
    User.findOne({username :  search } , function(err : any, search : any) {
        if(!search){
            return res.json({ 'process' : 'Can not find user'})
        }
        else{
            return res.json({ 'process' : true , search})
        }
    })


}
export default { Search }