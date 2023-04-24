import sentMail from "../helpers/sentMail.js";
import DoctorModel from "../models/DoctorModel.js";
import bcrypt from "bcryptjs"
import HospitalModel from "../models/HospitalModel.js"
import DepartmentModel from "../models/DepartmentModel.js";
import ScheduleModel from "../models/ScheduleModel.js";
import cloudinary from '../config/cloudinary.js'
import BookingModel from "../models/BookingModel.js";
import FeedbackModel from "../models/FeedbackModel.js";

var salt = bcrypt.genSaltSync(10);


export async function hospitalDashboard(req, res) {
    try {
        const totalDoctors = await DoctorModel.find({ hospitalId: req.hospital._id }).count();
        const booking = await BookingModel.aggregate([
            { $match: { hospitalId: req.hospital._id } },
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
        res.json({ err: false, totalDoctors, booking: booking[0], monthlyData })
    }
    catch (err) {
        console.log(err)
        res.json({ message: "somrthing went wrong", error: err, err: true })
    }
}
export async function addDepartment(req, res) {
    try {
        await DepartmentModel.updateOne({ name: req.body.department }, { $set: { name: req.body.department.trim().toLowerCase() }, $addToSet: { hospitalId: req.hospital._id } }, { upsert: true })
        res.json({ err: false })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err: true })
    }
}
export async function editDepartment(req, res) {
    try {
        await DepartmentModel.findByIdAndUpdate(req.body.id, { $set: { name: req.body.department.trim().toLowerCase() } })
        res.json({ err: false })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err: true })
    }
}

export async function getDepartments(req, res) {
    try {
        const name = req.query.name ?? ""
        let departments = await DepartmentModel.find({ hospitalId: req.hospital._id, name: new RegExp(name, 'i') }).lean()
        res.json({ err: false, departments })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err: true })
    }
}

export async function getDoctors(req, res) {
    try {
        const name = req.query.name ?? ""
        let doctors = await DoctorModel.find({ hospitalId: req.hospital._id, name: new RegExp(name, 'i') }).lean()
        res.json({ err: false, doctors })
    }
    catch (err) {
        res.json({ message: "somrthing went wrong", error: err, err: true })
    }
}

export async function addDoctor(req, res) {
    try {
        const { password } = req.body;
        const hashPassword = bcrypt.hashSync(password, salt);
        const doctor = await DoctorModel.create({ ...req.body, password: hashPassword, hospitalId: req.hospital._id });
        res.json({ err: false })

    } catch (err) {
        console.log(err)
        res.json({ err: true, error: err, message: "Something Went Wrong" })
    }

}
export async function editDoctor(req, res) {
    try {
        const doctor = await DoctorModel.updateOne({ _id: req.body._id }, { $set: { ...req.body, hospitalId: req.hospital._id } });
        res.json({ err: false })

    } catch (err) {
        console.log(err)
        res.json({ err: true, error: err, message: "Something Went Wrong" })
    }

}
export async function blockDoctor(req, res) {
    try {
        await DoctorModel.updateOne({ _id: req.body.id }, { $set: { block: true } });
        res.json({ err: false })

    } catch (err) {
        console.log(err)
        res.json({ err: true, error: err, message: "Something Went Wrong" })
    }

}
export async function unBlockDoctor(req, res) {
    try {
        await DoctorModel.updateOne({ _id: req.body.id }, { $set: { block: false } });
        res.json({ err: false })

    } catch (err) {
        console.log(err)
        res.json({ err: true, error: err, message: "Something Went Wrong" })
    }

}
export async function updateSchedule(req, res) {
    try {
        // res.json(req.body)
        const { doctorId } = req.body;
        await ScheduleModel.updateOne({ doctorId }, {
            $set: {
                ...req.body
            }
        }, { upsert: true })

        res.json({ err: false })

    } catch (err) {
        console.log(err)
        res.json({ err: true, error: err, message: "Something Went Wrong" })
    }

}

export async function getSchedule(req, res) {
    try {
        const { doctorId } = req.params;
        const schedule = await ScheduleModel.findOne({ doctorId });
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
export async function editHospitalProfile(req, res) {
    try {
        const { image, name, about, address, place, mobile } = req.body;
        if (image) {
            const data = await cloudinary.uploader.upload(image, {
                folder: 'docOnline'
            })
            await HospitalModel.findByIdAndUpdate(req.hospital._id, {
                $set: {
                    image: data,
                    name, about, address, place, mobile
                }
            })
        } else {
            await HospitalModel.findByIdAndUpdate(req.hospital._id, {
                $set: {
                    name, about, address, place, mobile
                }
            })
        }
        res.json({ result: data, err: false })

    } catch (error) {
        console.log(error);
        res.json({ err: true, error, message: "something went wrong" })
    }
}

export async function getBookings(req, res) {
    try {
        const bookings = await BookingModel.find({
            hospitalId: req.hospital._id
        }).populate('doctorId').sort({ _id: -1 })
        return res.json({ err: false, bookings })

    } catch (error) {
        console.log(error)
        res.json({ err: true, error, message: "something went wrong" })
    }
}

export async function getHospitalProfile(req, res) {
    try {

        let totalRating = 0;

        const reviews = await FeedbackModel.find({
            hospitalId: req.hospital._id
        }).populate('userId').lean()

        for (let item of reviews) {
            totalRating += item.rating
        }
        let reviewCount = reviews.length != 0 ? reviews.length : 1;
        const rating = totalRating / reviewCount;
        // const hospital = await HospitalModel.findById(req.hospital._id, { password: 0 });
        const departments = await DepartmentModel.find({ hospitalId: req.hospital._id }, { password: 0 });
        res.json({
            err: false, hospital: req.hospital, departments,
            rating, reviews
        })

    } catch (error) {
        console.log(error)
        res.json({ err: true, error, message: "something went wrong" })
    }
}
