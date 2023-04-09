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
        const department= req.query.department ?? "";
        const hospital= req.query.hospital ?? "";
        console.log(req.query)
        let doctors=[]
        if(hospital){
            doctors= await DoctorModel.find({name:new RegExp(name, 'i'), department:department, hospitalId:hospital}, {password:0}).populate('hospitalId', 'name').lean()
            console.log("department")
        }
        else if(department){
            doctors= await DoctorModel.find({name:new RegExp(name, 'i'), department:department}, {password:0}).populate('hospitalId', 'name').lean()
        }
        else{
            doctors= await DoctorModel.find({name:new RegExp(name, 'i')}, {password:0}).populate('hospitalId', 'name').lean()
        }
        res.json({doctors})

    }catch(err){
        console.log(err)
        res.json({err:true, error:err})
    }
}
export async function getDoctor(req, res){
    try{
        const doctor= await DoctorModel.findById(req.params.id, {password:0}).populate('department');
        res.json({err:false, doctor})

    }catch(err){
        console.log(err)
        res.json({err:true, error:err})
    }
}
export async function getHospital(req, res){
    try{
        const hospital= await HospitalModel.findById(req.params.id, {password:0});
        const departments= await DepartmentModel.find({hospitalId:hospital._id}, {password:0});
        console.log("hospital",hospital)
        console.log("department",departments)
        
        res.json({err:false, hospital, departments})

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
