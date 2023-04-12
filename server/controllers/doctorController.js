import cloudinary from '../config/cloudinary.js'
import DoctorModel from '../models/DoctorModel.js';


export async function editDoctorProfile(req, res){
    try{
        const {image}= req.body;
        const data=await cloudinary.uploader.upload(image,{
            folder:'docOnline'
        })
        console.log(data)
        await DoctorModel.findByIdAndUpdate(req.doctor._id, {$set:{image:data}})
        console.log(await DoctorModel.findById(req.doctor._id))
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