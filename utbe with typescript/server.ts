import express, { application } from "express"
import bodyParser from 'body-parser'
import mongoose from "mongoose"
import cookieParser from "cookie-parser"


import  apiRouter  from "./router/apiRouter"
import userRouter from "./router/userRouter"
import videoRouter from "./router/videoRouter"
import { config } from "./config/config"
import Logger from "./middlewares/appLogger"


const app:express.Application = express();
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/' , apiRouter)
app.use('/user' , userRouter)
app.use('/video' , videoRouter)



mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logger.info('Connected to Mongodb database')
    })
    .catch((err) => {
        Logger.error('Failed to connect to Mongodb')
        Logger.error(err)
    })



const hostname:string = '127.0.0.1'
const port:number = 3000

app.listen(port , hostname , () =>{
    console.log(`listening at http://${hostname}:${port}`);
})