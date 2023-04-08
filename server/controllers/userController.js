import DepartmentModel from "../models/DepartmentModel.js"
import HospitalModel from "../models/HospitalModel.js"


export async function getAllDepartments(req, res){
    try{
        const departments= await DepartmentModel.find().lean()
        console.log(departments)
        res.json({departments})

    }catch(err){
        console.log(err)
        res.json({err:true, error:err})
    }

}
export async function getAllHospitals(req, res){
    try{
        const hospitals= await HospitalModel.find().lean()
        console.log(hospitals)
        res.json({hospitals})

    }catch(err){
        console.log(err)
        res.json({err:true, error:err})
    }
}
