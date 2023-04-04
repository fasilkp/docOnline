import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    hospitalId:{
        type: mongoose.Schema.Types.ObjectId,
        required:"Hospital"
    }
})

const DepartmentModel=mongoose.model("Department", schema)
export default DepartmentModel