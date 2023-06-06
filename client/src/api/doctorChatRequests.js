import axios from 'axios'

export const createDoctorChat = (data) => axios.post('/doctor/chat', data);

export const getDoctorChats = (id) => axios.get(`/doctor/chat/${id}`);

export const findDoctorChat = (userId, doctorId) => axios.get(`/doctor/chat/find/${userId}/${doctorId}`);