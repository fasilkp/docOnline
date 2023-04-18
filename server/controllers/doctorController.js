import cloudinary from '../config/cloudinary.js'
import BookingModel from '../models/BookingModel.js';
import DoctorModel from '../models/DoctorModel.js';


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
        const bookings = await BookingModel.find({
            doctorId:req.doctor._id
        }).sort({ _id:-1})
        return res.json({err:false, bookings})

    }catch(error){
        console.log(error)
        res.json({err:true, error, message:"something went wrong"})
    }
}