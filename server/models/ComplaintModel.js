import mongoose from "mongoose"

const schema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    hospitalId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    },
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
    description:{
        type:String,
        required:true
    },
    
})

const ComplaintModel=mongoose.model("Complaint", schema)
export default ComplaintModel