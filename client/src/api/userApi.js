import axios from "axios";
import Swal from "sweetalert2";

export async function addDoctorReview(rating, review, doctorId){
    const {data} = await axios.post('/user/feedback/doctor',{
        review, rating, doctorId
    })
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data
}

export async function addHospitalReview(rating, review, hospitalId){
    const {data} = await axios.post('/user/feedback/hospital',{
        review, rating, hospitalId
    })
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data
}

export async function getDoctor(id){
    const {data} = await axios.get("/user/doctor/" + id);
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data
}

export async function getAllDoctors(id){
    const {data} = await axios.get("/user/doctors");
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data
}

export async function getAllHospitals(id){
    const {data} = await axios.get("/user/hospitals");
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data
}

export async function getHospital(id){
    const {data} = await axios.get("/user/hospital/" + id);
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data
}

export async function addComplaint(complaintAgainst, type, description){
    const {data} = await axios.post("/user/complaint", {complaintAgainst, type, description});
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data
}

export async function cancelBooking(bookingId){
    const {data} = await axios.patch("/user/booking/cancel", {bookingId});
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data
}

export async function getTop3Doctors(bookingId){
    const {data} = await axios.get("/user/doctors/top");
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data
}

export async function getTop3Hospitals(bookingId){
    const {data} = await axios.get("/user/hospitals/top");
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data
}

export async function getUserEMR(bookingId) {
    const {data} = await axios.get("/user/emr/"+bookingId)
    console.log(data)
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data;
}