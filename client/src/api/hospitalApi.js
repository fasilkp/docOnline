import axios from "axios";
import Swal from "sweetalert2";

export async function getHospitalProfile(){
    const {data} = await axios.get("/hospital/profile/");
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
export async function getDashboardDetails(){
    const {data} = await axios.get("/hospital/dashboard") 
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