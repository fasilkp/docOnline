import sentMail from "../helpers/sentMail.js";
import HospitalModel from "../models/HospitalModel.js"

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
        await sentMail(email, 'Doc online has approved your request for registration', 'You can proceed to your account')
        res.json({ err:false})
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}
export async function rejectHospital(req, res) {
    try {
        const {email}=req.body;
        await HospitalModel.deleteOne({email});
        await sentMail(email, 'Doc online has rejected your request for registration', 'Please try again sometimes')
        res.json({ err:false})
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err:true })
    }
}