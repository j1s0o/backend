import express from 'express'
import path from 'path'
import VideoConttrol from '../controller/VideoConttrol' 

const videoRouter:express.Router = express.Router()


videoRouter.post('/search' , VideoConttrol.Search)
videoRouter.post('/video_add', VideoConttrol.Video_add)
videoRouter.get('/add_video' , (req:express.Request, res:express.Response) =>{
    res.status(200).render(path.join('html/video' , 'add_video'))
})
videoRouter.get('/all' , VideoConttrol.getVideo)
export default videoRouter