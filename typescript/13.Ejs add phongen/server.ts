import express, { application } from "express"
import bodyParser from 'body-parser'
import  apiRouter  from "./router/apiRouter"
import userRouter from "./router/userRouter"
import { config } from "./config/config"
import Logger from "./middlewares/appLogger"
import mongoose from "mongoose"




const app:express.Application = express();
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json())
app.use('/' , apiRouter)
app.use('/user' , userRouter)

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