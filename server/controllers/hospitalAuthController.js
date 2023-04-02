import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs"


var salt = bcrypt.genSaltSync(10);

import HospitalModel from "../models/HospitalModel";

export async function hospitalRegister(req, res){
    try{
        const {name, email, password}=req.body;
        const hashPassword = bcrypt.hashSync(password, salt);
        const hospital = await HospitalModel.create({name, email, password:hashPassword});
        res.json({err:false})

    }catch(err){
        res.json({err:true , error:err, message:"Something Went Wrong"})
    }

}