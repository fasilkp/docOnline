import axios from 'axios'



export const createChat = (data) => axios.post('/chat/', data);

export const userChats = (id) => axios.get(`/chat/${id}`);

export const findChat = (firstId, secondId) => axios.get(`/chat/find/${firstId}/${secondId}`);