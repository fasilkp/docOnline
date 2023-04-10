import express from 'express'
import { acceptHospital, blockHospital, getDepartments, getDoctors, getHospitalRequests, getHospitals, getUsers, rejectHospital, unBlockHospital } from '../controllers/adminController.js';

const Router = express.Router();

Router.get("/hospital/requests", getHospitalRequests)
Router.post("/hospital/accept", acceptHospital)
Router.post("/hospital/reject", rejectHospital)

Router.patch("/hospital/block", blockHospital)
Router.patch("/hospital/unblock", unBlockHospital)

Router.get("/departments", getDepartments)

Router.get("/hospitals", getHospitals)

Router.get("/doctors", getDoctors)

Router.get("/users", getUsers)


export default Router