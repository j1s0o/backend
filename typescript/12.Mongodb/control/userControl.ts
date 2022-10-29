import express from 'express'
import Users from './../database/data'

export let allusers = (req:express.Request,res:express.Response) =>{
    let users = Users.find((err:any , user:any)=>{
        if(err){
            res.status(404)
        }
        else{
            res.send(user)
        }
    })
}

 