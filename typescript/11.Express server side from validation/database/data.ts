import mongoose from "mongoose";

const uri:string = "mongodb://localhost:27017/users"

mongoose.connect(uri , (err:any) =>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log("Connect success")
    }
})
export const UserSchema = new mongoose.Schema({
    username : {type:String , require:true},
    password : {type:String , require:true}
})

const Users = mongoose.model('users' , UserSchema)
export default Users