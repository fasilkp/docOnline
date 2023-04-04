import sentMail from "../helpers/sentMail.js";
import DepartmentModel from "../models/DepartmentModel.js";
import DoctorModel from "../models/DoctorModel.js";
import HospitalModel from "../models/HospitalModel.js"
import UserModel from '../models/UserModel.js'

export async function getHospitalRequests(req, res) {
    try {
        const doctorRequests=await HospitalModel.find({active:false}).lean()
        res.json({ err:false, doctorRequests })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}
export async function acceptHospital(req, res) {
    try {
        const {email}=req.body;
        await HospitalModel.updateOne({email}, {active:true});
        res.json({ err:false})
        await sentMail(email, 'Doc online has approved your request for registration', 'You can proceed to your account')
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}
export async function rejectHospital(req, res) {
    try {
        const {email}=req.body;
        await HospitalModel.deleteOne({email});
        res.json({ err:false})
        await sentMail(email, 'Doc online has rejected your request for registration', 'Please try again sometimes')
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}

export async function getDepartments(req, res) {
    try {
        let departments=await DepartmentModel.find().lean()
        res.json({ err:false, departments })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}

export async function getHospitals(req, res) {
    try {
        let hospitals=await HospitalModel.find({active:true}).lean()
        res.json({ err:false, hospitals })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}

export async function getDoctors(req, res) {
    try {
        let doctors=await DoctorModel.find().lean()
        res.json({ err:false, doctors })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}

export async function getUsers(req, res) {
    try {
        let users=await UserModel.find().lean()
        res.json({ err:false, users })
    }
    catch (err) {
        res.json({ message: "something went wrong", error: err, err:true })
    }
}