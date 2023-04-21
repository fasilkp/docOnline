import cloudinary from '../config/cloudinary.js'
import BookingModel from '../models/BookingModel.js';
import DoctorModel from '../models/DoctorModel.js';
import EMRModel from '../models/EMRModel.js';
import ScheduleModel from '../models/ScheduleModel.js';


export async function editDoctorProfile(req, res){
    try{
        const {image}= req.body;
        const data=await cloudinary.uploader.upload(image,{
            folder:'docOnline'
        })
        await DoctorModel.findByIdAndUpdate(req.doctor._id, {$set:{image:data}})
        res.json({result:data, err:false})

    }catch(error){
        console.log(error);
        req.json({err:true, error, message:"something went wrong"})
    }
}
export async function getDoctorProfile(req, res){
    try{
        res.json({doctor:req.doctor, err:false})

    }catch(error){
        console.log(error);
        req.json({err:true, error, message:"something went wrong"})
    }
}
export async function getDoctorBookings(req, res){
    try{
        const bookings = await BookingModel.find({
            $and: [
                {time: {$gt: new Date(new Date(new Date().setHours(0,0,0,0)).setDate(new Date().getDate()-1))}},
                {time: {$lt: new Date(new Date(new Date().setHours(0,0,0,0)).setDate(new Date().getDate()))}},
                {doctorId:req.doctor._id}
                ]
            
        }).sort({ _id:-1})
        return res.json({err:false, bookings})

    }catch(error){
        console.log(error)
        res.json({err:true, error, message:"something went wrong"})
    }
}
export async function getDoctorTodayBookings(req, res){
    try{
        console.log(req.doctor)
        const bookings = await BookingModel.find({
             $and: [
                {date: {$gt: new Date(new Date(new Date().setHours(0,0,0,0)).setDate(new Date().getDate()))}},
                {date: {$lt: new Date(new Date(new Date().setHours(0,0,0,0)).setDate(new Date().getDate()+1))}},
                {doctorId:req.doctor._id}
             ]
        }).sort({ _id:-1})
        return res.json({err:false, bookings})

    }catch(error){
        console.log(error)
        res.json({err:true, error, message:"something went wrong"})
    }
}

export async function getDoctorSchedule(req, res) {
    try {
        const schedule = await ScheduleModel.findOne({ doctorId:req.doctor._id });
        if (schedule) {
            return res.json({ err: false, schedule })
        } else {
            return res.json({
                err: false, schedule: {
                    mon: [],
                    tue: [],
                    wed: [],
                    thu: [],
                    fri: [],
                    sat: [],
                    sun: []
                }
            })
        }
    } catch (err) {
        console.log(err)
        res.json({ err: true, error: err, message: "Something Went Wrong" })
    }
}

export async function addEMR(req, res) {
    try {
        const {
            userId, bookingId, prescription,patientName,age, weight, gender
        } = req.body;

        const emr= await EMRModel.updateOne({bookingId}, {
            doctorId:req.doctor._id,
            userId, bookingId, prescription, patientName, age, weight, gender
        }, {upsert:true})

        res.json({err:false})
        
    } catch (err) {
        console.log(err)
        res.json({ err: true, error: err, message: "Something Went Wrong" })
    }
}

export async function getEMR(req, res) {
    try {
        const {bookingId}=req.params;
        console.log(bookingId)
        const emr= await EMRModel.findOne({bookingId})
        console.log(emr)
        res.json({err:false, emr})
        
    } catch (err) {
        console.log(err)
        res.json({ err: true, error: err, message: "Something Went Wrong" })
    }
}