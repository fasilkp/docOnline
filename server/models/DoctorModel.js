import mongoose from "mongoose"

const DoctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    mobile :{
        type:Number
    },
    department :{
        type:String
    },
    qualification :{
        type:String
    },
    specializedIn :{
        type:String
    },
    about :{
        type:String
    },
    image :{
        type:Object
    },
    fees :{
        type:Number
    }
    
})

const DoctorModel=mongoose.model("Doctor", DoctorSchema)
export default DoctorModel