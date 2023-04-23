import axios from "axios";
import Swal from "sweetalert2";

export async function addDoctorReview(rating, review, doctorId){
    const {data} = await axios.post('/user/feedback/doctor',{
        review, rating, doctorId
    })
    console.log(data)
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