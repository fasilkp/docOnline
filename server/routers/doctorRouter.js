import express from 'express'
import { editDoctorProfile, getDoctorBookings, getDoctorProfile, getDoctorTodayBookings } from '../controllers/doctorController.js';

const Router = express.Router();


Router.patch('/profile', editDoctorProfile)
Router.get("/profile", getDoctorProfile)

Router.get('/booking', getDoctorBookings)
Router.get('/booking/today', getDoctorTodayBookings)




export default Router