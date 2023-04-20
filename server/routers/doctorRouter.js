import express from 'express'
import { editDoctorProfile, getDoctorBookings, getDoctorProfile, getDoctorSchedule, getDoctorTodayBookings } from '../controllers/doctorController.js';

const Router = express.Router();


Router.patch('/profile', editDoctorProfile)
Router.get("/profile", getDoctorProfile)

Router.get('/booking', getDoctorBookings)
Router.get('/booking/today', getDoctorTodayBookings)

Router.get("/schedule", getDoctorSchedule)



export default Router