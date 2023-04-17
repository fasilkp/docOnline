import minuteDiff from "../helpers/minuteDifference.js"
import BookingModel from "../models/BookingModel.js"
import DepartmentModel from "../models/DepartmentModel.js"
import DoctorModel from "../models/DoctorModel.js"
import HospitalModel from "../models/HospitalModel.js"


export async function getAllDepartments(req, res) {
    try {
        const departments = await DepartmentModel.find().lean()
        res.json({ departments })

    } catch (err) {
        console.log(err)
        res.json({ err: true, error: err })
    }

}
export async function getAllHospitals(req, res) {
    try {
        const name = req.query.name ?? "";
        const departmentId = req.query.department ?? "";
        let hospitals = []
        if (departmentId) {
            let department = await DepartmentModel.findOne({ _id: departmentId });
            hospitals = await HospitalModel.find({ name: new RegExp(name, 'i'), _id: { $in: department.hospitalId } }, { password: 0 }).lean()
        } else {
            hospitals = await HospitalModel.find({ name: new RegExp(name, 'i') }, { password: 0 }).lean()
        }
        res.json({ hospitals })

    } catch (err) {
        console.log(err)
        res.json({ err: true, error: err })
    }
}
export async function getAllDoctors(req, res) {
    try {
        const name = req.query.name ?? "";
        const department = req.query.department ?? "";
        const hospital = req.query.hospital ?? "";
        const sort = req.query.sort ?? "";
        let doctors = []
        if (sort) {
            if (hospital) {
                doctors = await DoctorModel.find({ name: new RegExp(name, 'i'), department: department, hospitalId: hospital }, { password: 0 }).populate('hospitalId', 'name').populate('department', 'name').sort({ fees: sort }).lean()
            }
            else if (department) {
                doctors = await DoctorModel.find({ name: new RegExp(name, 'i'), department: department }, { password: 0 }).populate('hospitalId', 'name').populate('department', 'name').sort({ fees: sort }).lean()
            }
            else {
                doctors = await DoctorModel.find({ name: new RegExp(name, 'i') }, { password: 0 }).populate('hospitalId', 'name').populate('department', 'name').sort({ fees: sort }).lean()
            }
        } else {
            if (hospital) {
                doctors = await DoctorModel.find({ name: new RegExp(name, 'i'), department: department, hospitalId: hospital }, { password: 0 }).populate('hospitalId', 'name').populate('department', 'name').lean()
            }
            else if (department) {
                doctors = await DoctorModel.find({ name: new RegExp(name, 'i'), department: department }, { password: 0 }).populate('hospitalId', 'name').populate('department', 'name').lean()
            }
            else {
                doctors = await DoctorModel.find({ name: new RegExp(name, 'i') }, { password: 0 }).populate('hospitalId', 'name').populate('department', 'name').lean()
            }
        }
        res.json({ doctors })

    } catch (err) {
        console.log(err)
        res.json({ err: true, error: err })
    }
}
export async function getDoctor(req, res) {
    try {
        const doctor = await DoctorModel.findById(req.params.id, { password: 0 }).populate('department').populate('hospitalId', 'name');
        res.json({ err: false, doctor })

    } catch (err) {
        console.log(err)
        res.json({ err: true, error: err })
    }
}
export async function getHospital(req, res) {
    try {
        const hospital = await HospitalModel.findById(req.params.id, { password: 0 });
        const departments = await DepartmentModel.find({ hospitalId: hospital._id }, { password: 0 });

        res.json({ err: false, hospital, departments })

    } catch (err) {
        console.log(err)
        res.json({ err: true, error: err })
    }
}

export async function checkTimeSlot(req, res) {
    try {

        const { schedule, date } = req.body;
        console.log(date)
        // console.log(schedule)
        let scheduleArr = []
        for (let item of schedule) {
            const timeSlot = new Date(item.startDate).toLocaleTimeString('en-US') + " - " + new Date(schedule.endDate).toLocaleTimeString('en-US');
            const bookingCount = await BookingModel.find({ $and: [
                {date: {$gt: new Date(new Date(new Date(date).setHours(0,0,0,0)).setDate(new Date(date).getDate()))}},
                {date: {$lt: new Date(new Date(new Date(date).setHours(0,0,0,0)).setDate(new Date(date).getDate()+1))}},
                {timeSlot:new Date(item.startDate).toLocaleTimeString('en-US') + " - " + new Date(item.endDate).toLocaleTimeString('en-US')}
                ]}).count();
                console.log(bookingCount)
            // console.log('booking count', bookingCount)
            const minuteDifference = minuteDiff(item.endDate, item.startDate);

            console.log(minuteDifference)

            let minutesPerPatient = Number(minuteDifference) / Number(item.slot)
            minutesPerPatient;
            console.log(minutesPerPatient)

            const totalMinutes = minutesPerPatient * bookingCount;


            const time = new Date(new Date(item.startDate).setMinutes(new Date(item.startDate).getMinutes() + totalMinutes))
            console.log(new Date(time).toLocaleTimeString())
            if (bookingCount < Number(item.slot)) {
                scheduleArr.push({ 
                    startDate: item.startDate, 
                    endDate: item.endDate, 
                    slot: item.slot, 
                    time: time, 
                })

            }
        }
        if(scheduleArr[0]){
            return res.json({
                err: false,
                result: {
                    schedule:scheduleArr,
                    date
                }
            })
        }
        return res.json({ err: true })
    } catch (error) {
        console.log(error)
        return res.json({ error, err: true, message: "something went wrong" })
    }


}