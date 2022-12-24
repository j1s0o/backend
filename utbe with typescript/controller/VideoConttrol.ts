import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'
import Video from './../models/Video'
import User from './../models/User'
dotenv.config()
const SECRET_TOKEN: any = process.env.SECRET_TOKEN
const Search = (req: express.Request, res: express.Response, next: express.NextFunction)=>{
    const search =  req.body.search
    Video.findOne({name :  search } , function(err : any, search : any) {
        if(!search){
            return res.json({ 'process' : 'Can not find video'})
        }
        else{
            return res.json({ 'process' : true , search})
        }
    })


}

const Video_add = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { name, img , decription } = req.body
    Video.findOne({name} , function (err : any, video : any) {
        if(video){
            return res.json({ 'process' : false})
        }
        else{
            const video = new Video({
                _id : new mongoose.Types.ObjectId(),
                name,
                img,
                decription,
            })
            video.save()
            return res.json({ 'process' : true})
        }
    })
}
const DeleteVideo = (req: express.Request, res: express.Response, next:express.NextFunction) =>{
    const  name  = req.body.name
    Video.findOne({name} , function (err:any , result:any) {
        if(!result){
            return res.json({ 'process' : false})
        }
        else{
            result.delete()
            return res.json({'process' : true})
        }
    })
}

const getVideo = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    return Video.find()
    .then((video) => res.status(200).json({ video }))
    .catch((err) => res.status(500).json({ err }))
}
export default { Search , Video_add  , getVideo , DeleteVideo}