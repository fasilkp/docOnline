import axios from 'axios'

export const createChat = (data) => axios.post('/chat/', data);

export const getUserChats = (id) => axios.get(`/chat/${id}`);

export const findChat = (userId, doctorId) => axios.get(`/chat/find/${userId}/${doctorId}`);