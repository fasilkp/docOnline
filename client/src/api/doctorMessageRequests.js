import axios from 'axios'



export const getDoctorMessages = (id) => axios.get(`/doctor/message/${id}`);

export const addDoctorMessage = (data) => axios.post('/doctor/message/', data);