import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs"
import HospitalModel from '../models/HospitalModel.js';


var salt = bcrypt.genSaltSync(10);


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

export async function hospitalLogin(req, res) {
    try {
        const { email, password } = req.body;
        const hospital = await HospitalModel.findOne({ email})
        if (!hospital){
            return res.json({ err: true, message: "No Hospital Found" })
        }
        if (!hospital.active){
            return res.json({ err: true, message: "Approval under process .inform you when completed" })
        }
    
        const hospitalValid = bcrypt.compareSync(password, hospital.password);
        if (!hospitalValid)
            return res.json({ err: true, message: "wrong Password" })
        const token = jwt.sign(
            {
                id: hospital._id
            },
            process.env.JWT_SECRET_KEY
        )
        return res.cookie("hospitalToken", token, {
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
            sameSite: "none",
        }).json({ err: false })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}


export const checkHospitalLoggedIn = async (req, res) => {
    try {
        const token = req.cookies.hospitalToken;
        if (!token)
            return res.json({ loggedIn: false, error: true, message: "no token" });

        const verifiedJWT = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const hospital = await HospitalModel.findOne({_id:verifiedJWT.id, active:true}, { password: 0 });
        if (!hospital) {
            return res.json({ loggedIn: false });
        }
        return res.json({ hospital, loggedIn: true });
    } catch (err) {
        console.log(err)
        res.json({ loggedIn: false, error: err });
    }
}
