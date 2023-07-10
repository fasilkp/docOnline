import axios from 'axios';
import Swal from 'sweetalert2'

export async function getDoctorEMR(bookingId) {
    const {data} = await axios.get("/doctor/emr/"+bookingId)
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

export async function addDoctorEMR(booking, weight, prescription, gender) {
    const {data} = await axios.post("/doctor/emr",{
        bookingId:booking._id,
        userId:booking.userId,
        patientName:booking.patientName,
        age:booking.age,
        weight,
        prescription,
        gender
      })
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data;
}

export async function getDoctorProfile(){
    const {data} = await axios.get("/doctor/profile/");
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data
}