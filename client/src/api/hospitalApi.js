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

export async function getHospitalBookings(name){
    const {data} = await axios.get("/hospital/booking?name="+name);
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data
}

export async function getHospitalComplaints(name){
    const {data} = await axios.get("/hospital/complaints");
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data
}

export async function getHospitalReport(startDate, endDate, filter){
    let result;
    if(filter){
        result = await axios.get("/hospital/reports?filter="+filter);
    }else{
        result = await axios.get("/hospitalreports?startDate="+startDate+"&endDate="+endDate);
    }
    console.log(result.data)
    if(result.data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: result.data.message,
          })
    }
    return result.data
}