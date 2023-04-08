import sentMail from "../helpers/sentMail.js";
import DoctorModel from "../models/DoctorModel.js";
import bcrypt from "bcryptjs"
import HospitalModel from "../models/HospitalModel.js"
import DepartmentModel from "../models/DepartmentModel.js";

var salt = bcrypt.genSaltSync(10);


export async function addDepartment(req, res) {
    try {

        await DepartmentModel.create({name:req.body.department.trim().toLowerCase(), hospitalId:req.hospital._id})
        res.json({ err:false })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}

export async function getDepartments(req, res) {
    try {
        let departments=await DepartmentModel.find({hospitalId:req.hospital._id}).lean()
        res.json({ err:false, departments })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}

export async function getDoctors(req, res) {
    try {
        let doctors=await DoctorModel.find({hospitalId:req.hospital._id}).lean()
        res.json({ err:false, doctors })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}

export async function addDoctor(req, res){
    try{
        const {password}=req.body;
        const hashPassword = bcrypt.hashSync(password, salt);
        const doctor = await DoctorModel.create({...req.body, password:hashPassword, hospitalId:req.hospital._id});
        res.json({err:false})

    }catch(err){
        console.log(err)
        res.json({err:true , error:err, message:"Something Went Wrong"})
    }

}
export async function editDoctor(req, res){
    try{
        const doctor = await DoctorModel.updateOne({_id:req.body._id},{$set:{...req.body, hospitalId:req.hospital._id}});
        res.json({err:false})

    }catch(err){
        console.log(err)
        res.json({err:true , error:err, message:"Something Went Wrong"})
    }

}
export async function blockDoctor(req, res){
    try{
        await DoctorModel.updateOne({_id:req.params.id}, {$set:{block:true}});
        res.json({err:false})

    }catch(err){
        console.log(err)
        res.json({err:true , error:err, message:"Something Went Wrong"})
    }

}

