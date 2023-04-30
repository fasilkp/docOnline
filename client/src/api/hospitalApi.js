import axios from "axios";
import Swal from "sweetalert2";

export async function getHospitalProfile(){
    const {data} = await axios.get("/hospital/profile/");
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
        result = await axios.get("/hospital/reports?startDate="+startDate+"&endDate="+endDate);
    }
    if(result.data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: result.data.message,
          })
    }
    return result.data
}

export async function withdrawHospitalWallet(accountHolder, accountNo, branch, ifsc){
    const {data} = await axios.post("/hospital/withdraw", {
        accountHolder, accountNo, branch, ifsc
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