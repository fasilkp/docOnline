import express from 'express'
import { acceptHospital, getDepartments, getDoctors, getHospitalRequests, getHospitals, rejectHospital } from '../controllers/adminController.js';

const Router = express.Router();

Router.get("/hospital/requests", getHospitalRequests)
Router.post("/hospital/accept", acceptHospital)
Router.post("/hospital/reject", rejectHospital)

Router.get("/departments", getDepartments)

Router.get("/hospitals", getHospitals)

Router.get("/doctors", getDoctors)


export default Router