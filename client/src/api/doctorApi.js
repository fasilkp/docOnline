import axios from 'axios';
import Swal from 'sweetalert2'

export async function getDoctorEMR(bookingId) {
    const {data} = await axios.get("/doctor/emr/"+bookingId)
    if(data.err){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
          })
    }
    return data;
}
