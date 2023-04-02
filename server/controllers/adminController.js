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