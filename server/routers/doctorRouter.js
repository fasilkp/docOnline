import express from 'express'
import { editDoctorProfile, getDoctorProfile } from '../controllers/doctorController.js';

const Router = express.Router();


Router.patch('/profile', editDoctorProfile)
Router.get("/profile", getDoctorProfile)
export default Router