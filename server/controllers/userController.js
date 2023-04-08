import DepartmentModel from "../models/DepartmentModel.js"
import DoctorModel from "../models/DoctorModel.js"
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
        const name= req.query.name ?? "";
        const hospitals= await HospitalModel.find({name:new RegExp(name, 'i')}, {password:0}).lean()
        console.log(hospitals)
        res.json({hospitals})

    }catch(err){
        console.log(err)
        res.json({err:true, error:err})
    }
}
export async function getAllDoctors(req, res){
    try{
        const name= req.query.name ?? "";
        const doctors= await DoctorModel.find({name:new RegExp(name, 'i')}, {password:0}).populate('hospitalId', 'name').lean()
        console.log(doctors)
        res.json({doctors})

    }catch(err){
        console.log(err)
        res.json({err:true, error:err})
    }
}
export async function getDoctor(req, res){
    try{
        const doctor= await DoctorModel.findById(req.params.id, {password:0});
        res.json({err:false, doctor})

    }catch(err){
        console.log(err)
        res.json({err:true, error:err})
    }
}
export async function getHospital(req, res){
    try{
        const hospital= await HospitalModel.findById(req.params.id, {password:0});
        res.json({err:false, hospital})

    }catch(err){
        console.log(err)
        res.json({err:true, error:err})
    }
}

// export async function searchData(req, res){
//     try{
//         const name= req.query.name ?? "";
//         const 


//     }catch(err){
//         console.log(err)
//         res.json({err:true, error:err})
//     }

// }
