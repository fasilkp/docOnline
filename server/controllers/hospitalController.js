import sentMail from "../helpers/sentMail.js";
import DoctorModel from "../models/DoctorModel.js";
import HospitalModel from "../models/HospitalModel.js"

export async function addDepartment(req, res) {
    try {

        await HospitalModel.findByIdAndUpdate(req.hospital._id,{
            $addToSet:{
                departments:req.body.department.trim().toLowerCase()
            }
        })
        res.json({ err:false })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}
export async function addDoctor(req, res){
    try{
        const {name, email, password}=req.body;
        const hashPassword = bcrypt.hashSync(password, salt);
        const doctor = await DoctorModel.create({name, email, password:hashPassword});
        res.json({err:false})

    }catch(err){
        res.json({err:true , error:err, message:"Something Went Wrong"})
    }

}
// export async function acceptHospital(req, res) {
//     try {
//         const {email}=req.body;
//         await HospitalModel.updateOne({email}, {active:true});
//         res.json({ err:false})
//         await sentMail(email, 'Doc online has approved your request for registration', 'You can proceed to your account')
//     }
//     catch (err) {
//         res.json({ message: "somrthing went wrong", error: err, err:true })
//     }
// }
// export async function rejectHospital(req, res) {
//     try {
//         const {email}=req.body;
//         await HospitalModel.deleteOne({email});
//         res.json({ err:false})
//         await sentMail(email, 'Doc online has rejected your request for registration', 'Please try again sometimes')
//     }
//     catch (err) {
//         res.json({ message: "somrthing went wrong", error: err, err:true })
//     }
// }