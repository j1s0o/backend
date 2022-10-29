import express from "express";
import  apiRouter  from "./router/apiRouter";
import userRouter from "./router/userRouter";


const app:express.Application = express();

app.get('/' , (req:express.Request, res:express.Response) => {
    res.status(200).send(`<h1>cc</h1>`)
})

app.use('/api' , apiRouter)
app.use('/users' , userRouter)

const hostname:string = '127.0.0.1'
const port:number = 3000

app.listen(port , hostname , () =>{
    console.log(`listening at http://${hostname}:${port}`);
})