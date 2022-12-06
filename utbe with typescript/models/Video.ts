import mongoose , {Document , Schema} from "mongoose";

export interface Video{
    name : string;
    img : string;
    decription : string;
}

export interface VideoModel extends Video , Document {}

const VideoSchema: Schema = new Schema (
    {
        name : {type : String , required : true},
        img : {type : String , required : true} , 
        decription : {type : String , required : true}
    },
    {
        versionKey : false
    },
)
export default mongoose.model<VideoModel>('Video' , VideoSchema)