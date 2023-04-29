import axios from "axios"
import Swal from "sweetalert2"

export async function getAdminDashboardDetails(){
    const {data} = await axios.get("/admin/dashboard") 
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

export async function getAdminComplaints(){
    const {data} = await axios.get("/admin/complaints");
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data
}

export async function getAdminReport(startDate, endDate){
    console.log(new Date(startDate))
    const {data} = await axios.get("/hospital/reports?startDate="+startDate+"&endDate="+endDate);
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data
}