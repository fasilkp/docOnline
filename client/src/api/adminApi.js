import axios from "axios"
import Swal from "sweetalert2"

export async function getAdminDashboardDetails(){
    const {data} = await axios.get("/admin/dashboard") 
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

export async function getAdminReport(startDate, endDate, filter){
    let result;
    if(filter){
        result = await axios.get("/admin/reports?filter="+filter);
    }else{
        result = await axios.get("/admin/reports?startDate="+startDate+"&endDate="+endDate);
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

export async function getAdminRefundList(){
    const {data} = await axios.get("/admin/booking/refunds")
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data
}