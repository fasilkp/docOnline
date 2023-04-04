import HospitalModel from "../models/HospitalModel.js"


export async function getAllDepartments(req, res){
    try{
        const departments= await HospitalModel.aggregate([
            {$unwind:"$departments"}, {$group:{_id:"$departments"}}
        ])
        console.log(departments)
        res.json(departments)

    }catch(err){
        console.log(err)
        res.json({err:true, error:err})
    }

}