import mongoose from "mongoose"

const Schema = new mongoose.Schema({
    accountHolder:{
        type: String,
        required:true
    },
    accountNo:{
        type: String,
        required:true
    },
    ifsc :{
        type:String,
        required:true
    },
    branch :{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:false
    }
})

const WithdrawModel=mongoose.model("Withdraw", Schema)
export default WithdrawModel