import mongoose from "mongoose"

const DoctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    hospitalId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
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
        type:mongoose.Schema.Types.ObjectId,
        ref:'Department'
    },
    qualification :{
        type:String
    },
    specialization :{
        type:String
    },
    about :{
        type:String
    },
    image :{
        type:Object,
        default:{
            url:"https://thumbs.dreamstime.com/b/default-placeholder-doctor-half-length-portrait-default-placeholder-doctor-half-length-portrait-photo-avatar-gray-color-113631373.jpg",
            secure_url:"https://thumbs.dreamstime.com/b/default-placeholder-doctor-half-length-portrait-default-placeholder-doctor-half-length-portrait-photo-avatar-gray-color-113631373.jpg"
        }
    },
    fees :{
        type:Number
    }
    
})

const DoctorModel=mongoose.model("Doctor", DoctorSchema)
export default DoctorModel