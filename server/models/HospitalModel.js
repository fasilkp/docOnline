import mongoose from "mongoose"

const HospitalSchema = new mongoose.Schema({
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
    departments:{
        type:Array,
        default:[]
    },
    about:{
        type:String,
        default:''
    },
    image:{
        type:Object
    },
    mobile:{
        type:Number
    },
    active:{
        type:Boolean,
        default:false
    }
})

const HospitalModel=mongoose.model("Hospital", HospitalSchema)
export default HospitalModel