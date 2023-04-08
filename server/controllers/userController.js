import DepartmentModel from "../models/DepartmentModel.js"
import HospitalModel from "../models/HospitalModel.js"


export async function getAllDepartments(req, res){
    try{
        const departments= await DepartmentModel.find().leana()
        console.log(departments)
        res.json(departments)

    }catch(err){
        console.log(err)
        res.json({err:true, error:err})
    }

}
