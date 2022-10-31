import express, { application } from "express"
import  apiRouter  from "./router/apiRouter"
import userRouter from "./router/userRouter"
import { config } from "./config/config"
import Logger from "./middlewares/appLogger"
import mongoose from "mongoose"




const app:express.Application = express();
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/api' , apiRouter)
app.use('/users' , userRouter)

mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logger.info('Connected to Mongodb database')
    })
    .catch((err) => {
        Logger.error('Failed to connect to Mongodb')
        Logger.error(err)
    })


app.get('/' , (req:express.Request, res:express.Response) => {
    res.status(200).send(`<h1>cc</h1>`)
})

const hostname:string = '127.0.0.1'
const port:number = 3000

app.listen(port , hostname , () =>{
    console.log(`listening at http://${hostname}:${port}`);
})