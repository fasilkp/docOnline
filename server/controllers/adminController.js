import sentMail from "../helpers/sentMail.js";
import BookingModel from "../models/BookingModel.js";
import DepartmentModel from "../models/DepartmentModel.js";
import DoctorModel from "../models/DoctorModel.js";
import HospitalModel from "../models/HospitalModel.js"
import UserModel from '../models/UserModel.js'

export async function adminDashboard(req, res) {
    try {
        const totalDoctors = await DoctorModel.find().count();
        const booking = await BookingModel.aggregate([
            { $group: { _id: "totalBokingDetails", totalBooking: { $sum: 1 }, totalRevenue: { $sum: "$fees" } } }
        ])
        const monthlyDataArray = await BookingModel.aggregate([{ $group: { _id: { $month: "$date" }, totalRevenue: { $sum: "$fees" } } }])
        console.log(monthlyDataArray)
        let monthlyDataObject = {}
        monthlyDataArray.map(item => {
            monthlyDataObject[item._id] = item.totalRevenue
        })
        console.log(monthlyDataObject)
        let monthlyData = []
        for (let i = 1; i <= 12; i++) {
            monthlyData[i - 1] = monthlyDataObject[i] ?? 0
        }
        console.log(monthlyData)
        res.json({ err: false, totalDoctors, booking: booking[0], monthlyData })
    }
    catch (err) {
        console.log(err)
        res.json({ message: "somrthing went wrong", error: err, err: true })
    }
}

export async function getHospitalRequests(req, res) {
    try {
        const doctorRequests=await HospitalModel.find({active:false,rejected:{$ne:true}}).lean()
        res.json({ err:false, doctorRequests })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}
export async function acceptHospital(req, res) {
    try {
        const {email}=req.body;
        await HospitalModel.updateOne({email}, {active:true });
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
        // await HospitalModel.deleteOne({email});
        await HospitalModel.updateOne({email}, {active:false, rejected:true});

        res.json({ err:false})
        await sentMail(email, 'Doc online has rejected your request for registration', 'Please try again sometimes')
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}

export async function getDepartments(req, res) {
    try {
        const name= req.query.name ?? "";
        let departments=await DepartmentModel.find({name:new RegExp(name, 'i')}).lean()
        res.json({ err:false, departments })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}

export async function getHospitals(req, res) {
    try {
        const name=req.query.name ?? "";
        let hospitals=await HospitalModel.find({active:true, name: new RegExp(name, 'i')}).lean()
        res.json({ err:false, hospitals })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}

export async function getDoctors(req, res) {
    try {
        const name= req.query.name ?? "";
        let doctors=await DoctorModel.find({name: new RegExp(name, 'i')}).populate('department').populate('hospitalId').lean()
        res.json({ err:false, doctors })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}

export async function getUsers(req, res) {
    try {
        const name= req.query.name ?? "";
        let users=await UserModel.find({name: new RegExp(name, 'i')}).lean()
        res.json({ err:false, users })
    }
    catch (err) {
        res.json({ message: "something went wrong", error: err, err:true })
    }
}

export async function blockHospital(req, res) {
    try {
        await HospitalModel.findByIdAndUpdate(req.body.id,{$set:{block:true}}).lean()
        res.json({ err:false })
    }
    catch (err) {
        res.json({ message: "something went wrong", error: err, err:true })
    }
}

export async function unBlockHospital(req, res) {
    try {
        await HospitalModel.findByIdAndUpdate(req.body.id,{$set:{block:false}}).lean()
        res.json({ err:false })
    }
    catch (err) {
        res.json({ message: "something went wrong", error: err, err:true })
    }
}

export async function blockUser(req, res) {
    try {
        await UserModel.findByIdAndUpdate(req.body.id,{$set:{block:true}}).lean()
        res.json({ err:false })
    }
    catch (err) {
        res.json({ message: "something went wrong", error: err, err:true })
    }
}

export async function unBlockUser(req, res) {
    try {
        await UserModel.findByIdAndUpdate(req.body.id,{$set:{block:false}}).lean()
        res.json({ err:false })
    }
    catch (err) {
        res.json({ message: "something went wrong", error: err, err:true })
    }
}