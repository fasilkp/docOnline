import mongoose from "mongoose"

const schema = new mongoose.Schema({
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
    hospitalId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    payment:{
        type:Object,
        default:{}
    },
    date:{
        type: Date,
        required:true
    },
    timeSlot:{
        type:String,
        required:true
    },
    time:{
        type:Date,
        required:true
    },
    fees:{
        type:Number,
        required:true
    },
    patientName:{
        type:String,
        default:""
    },
    age:{
        type:Number,
        default:""
    },
    token:{
        type:String,
        defaullt: Math.ceil(Math.random() *100000)
    }
})

const BookingModel=mongoose.model("Booking", schema)
export default BookingModel