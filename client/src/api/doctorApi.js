import axios from 'axios';

export async function getDoctorEMR(bookingId) {
    const {data} = await axios.get("/doctor/emr/"+bookingId)
    return data;
}
